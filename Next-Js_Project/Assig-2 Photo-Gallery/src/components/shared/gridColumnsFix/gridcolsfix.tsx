import { Props } from "@/components/widgets/gallery";
const GridColsFix:React.FC<{image:Props[], getImage:(imageData:Props)=> React.ReactNode}> = ({image,getImage}) => {
    const MaxCoL = 4;

    function gridColsFix(colInex: number) {
      return image.filter((resource,i) => i % MaxCoL === colInex);
    }
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 px-3 py-6">

      {[
        gridColsFix(0),
        gridColsFix(1),
        gridColsFix(2),
        gridColsFix(3),
      ].map((columns,index) => 
      <div  key={index} className="flex flex-col gap-4">
     {
      columns.map((getImage))}
      </div>
      )}

    </div>
  )
}

export default GridColsFix
