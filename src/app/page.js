import Render from "./home/Render";
import { ALL_SEARCH_QUERY } from "./queries/all-search";

export default async function Home() {
    const url = "https://graphql.anilist.co",
        options = {
            method: "POST",
            cache: "force-cache",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: ALL_SEARCH_QUERY,
            }),
        };

    const fetchAll = async () => {
        try {
            const data = await fetch(url, options);
            const response = await data.json();
            return response;
        } catch (error) {}
    };

    const data = await fetchAll();

    return (
        <main>
            <Render data={data} />
        </main>
    );
}
