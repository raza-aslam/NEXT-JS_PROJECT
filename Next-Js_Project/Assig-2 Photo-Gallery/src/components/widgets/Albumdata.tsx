import GridComponent from "@/components/data_components/GridComponent";
import { Props } from "@/components/widgets/gallery";
import cloudinary from "cloudinary"
import { Metadata } from "next";

export async function genrateMetadata({params:{albums}}: {params:{albums:string}}): Promise<Metadata> {
  return {
    title: `${albums} Albums`
  }
}


async function AlbumsData({params: {albums}}: {params: {albums: string}}) {
  const folders = await (cloudinary.v2.search
  .expression(`resource_type:image AND folder=${albums}`)
  .with_field('tags')
  .sort_by('created_at','desc')
  .max_results(60)
  .execute()) as {resources: Props[]};
  
  return (
    <section>
    <div className="flex justify-between py-4 px-6">
       <div>
        <h1 className="md:text-3xl text-xl font-bold">{albums} Albums </h1>
       </div>
    </div>
    <div>
        <GridComponent props={folders.resources}/>
    </div>
    </section>
  )
}

export default AlbumsData;
