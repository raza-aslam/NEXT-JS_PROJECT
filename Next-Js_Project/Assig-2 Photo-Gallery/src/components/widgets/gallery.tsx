import cloudinary from "cloudinary"
import UploadButton from "@/components/shared/UploadButton/UploadButton";
import GridColsFix from "@/components/shared/gridColumnsFix/gridcolsfix";
import GalleryImageComponent from "@/components/data_components/GalleryImageComponent";

export interface Props {
    public_id: string;
    tags: string[];
    clasName?: string;
}

async function GalleryPage({searchParams: {search}}:{searchParams: {search: string}}) {
  const searchExpression = `resource_type:image${
    search
      ? ` AND (tags:${search} OR filename:${search} OR context.custom.my_field:${search})`
      : ""
  }`;
  const response = await (cloudinary.v2.search
  .expression(searchExpression)
  .with_field('tags')
  .sort_by('created_at','desc')
  .max_results(60)
  .execute()) as {resources: Props[]};
  return (
    <section>
    <div className="flex justify-between py-4 px-6 mt-10">
       <div>
        <h1 className="md:text-3xl text-xl font-bold"> Gallery </h1>
       </div>
       <div>
        <UploadButton />
       </div>
    </div>
    <div>
      <GridColsFix 
      image={response.resources}
      getImage={(imageData)=> {
        return(
          <GalleryImageComponent key={imageData.public_id}  public_id={imageData.public_id} tags={imageData.tags}/>
        )
      }}
      />
    </div>
    </section>
  )
}

export default GalleryPage