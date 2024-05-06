"use client";

import GalleryImageComponent from "@/components/data_components/GalleryImageComponent";
import { Props } from "@/components/widgets/gallery";
import { useEffect, useState } from "react";
import GridColsFix from "@/components/shared/gridColumnsFix/gridcolsfix";
import { useRouter } from "next/navigation";


const GridComponent:React.FC<{props:Props[]}> = ({props}) => {
  const router = useRouter();
    const [resources, setResources] = useState(props);
    useEffect(() => {
      setResources(resources)
      router.refresh()
    },[router,resources])
  return (
    <section>
      <GridColsFix 
      image={resources}
      getImage={(imageData)=> {
        return(
          <GalleryImageComponent 
          key={imageData.public_id}  
          public_id={imageData.public_id} 
          tags={imageData.tags}
          onUnaheart={(UnheartedResources) => {
            setResources((currentResources) => (
                currentResources.filter(
                    (resource) => resource.public_id !== UnheartedResources.public_id
                ) 
            ))
          }}
          />
        )
      }}
      />
    </section>
  )
}

export default GridComponent