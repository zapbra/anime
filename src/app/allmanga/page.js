import Render from "./Render";
import AnimeMangaRender from "@/app/components/AnimeMangaRender";
import { getAnimeMangaBySearch } from "@/app/lib/fetching";

const AllManga = async () => {
    const data = await getAnimeMangaBySearch({
        query: null,
        page: 1,
        type: "MANGA",
    });

    return (
        <AnimeMangaRender
            dataFetch={data.data.Page}
            type="MANGA"
            title="Manga"
        />
    );
};

export default AllManga;
