import cloudinary from "cloudinary"
import { Props } from "@/components/widgets/gallery";
import GridComponent from "@/components/data_components/GridComponent";

const Favourite = async () => {
const response = await (cloudinary.v2.search
    .expression('resource_type:image AND tags=favourite')
    .with_field("tags")
    .sort_by('created_at','desc')
    .max_results(30)
    .execute()) as {resources: Props[]};

    const hasFavourites = response.resources.length > 0;

    return (
        <section>
        {hasFavourites ? (
            <div>
            <div className="flex justify-between px-3 py-4">
            <div>
            <h1 className="md:text-3xl text-xl font-bold"> My Favourite Items </h1>
            </div>
            </div>
            <div>
            <GridComponent props={response.resources}/>
            </div>
            </div>
        ):(
            <div className="px-3 py-4">
                <h1 className="md:text-3xl text-xl font-bold"> You don{"'"}t have any </h1>
                <h1 className="md:text-3xl text-xl font-bold mt-1"> favourite Items Yet </h1>
            </div>
        )}
        </section>
    )
}

export default Favourite
