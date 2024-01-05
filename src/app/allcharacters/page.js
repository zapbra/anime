import { getCharactersBySearch } from "@/app/lib/fetching";
import Render from "./Render";
const AllCharacters = async () => {
    const data = await getCharactersBySearch({
        query: null,
        page: 1,
    });
    return <Render dataFetch={data.data.Page} />;
};

export default AllCharacters;
