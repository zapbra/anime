import Render from "./Render";
import { getAnimeMangaBySearch } from "@/app/lib/fetching";

const AllManga = async () => {
    const data = await getAnimeMangaBySearch({
        query: null,
        page: 1,
        type: "MANGA",
    });

    return <Render dataFetch={data.data.Page} />;
};

export default AllManga;
