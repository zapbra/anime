import Render from "./Render";
import { getAnime } from "@/app/lib/fetching";

const Page = async ({ params }) => {
    const { id } = params;
    const data = await getAnime({ id: parseInt(id) });

    return (
        <div>
            <Render anime = {data.data.Media} />
        </div>
    )
}

export default Page;