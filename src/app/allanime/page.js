import Render from './Render';
import {getAnimeBySearch} from "@/app/lib/fetching";


const AllAnime = async () => {
    // fetches a list of the most popular animes with empty search query
    const data = await getAnimeBySearch({query: null});

    return (
        <Render
            anime = {data.data.AnimeSearch.media}
        />
    )
};

export default AllAnime;