import Render from "./Render";
import { getAnimeBySearch, getAnimeMangaBySearch } from "@/app/lib/fetching";
import AnimeMangaRender from "@/app/components/AnimeMangaRender";

const AllAnime = async () => {
    // fetches a list of the most popular animes with empty search query
    const data = await getAnimeMangaBySearch({
        query: null,
        page: 1,
        type: "ANIME",
    });

    return (
        <AnimeMangaRender
            dataFetch={data.data.Page}
            type="ANIME"
            title="Anime"
        />
    );
};

export default AllAnime;
