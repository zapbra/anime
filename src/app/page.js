import Render from "./home/Render";
import { ALL_SEARCH_QUERY } from "./queries/all-search";
import { getHomepageData } from "@/app/lib/fetching";

export default async function Home() {
    const data = await getHomepageData({ query: null, results: 10 });

    return (
        <main>
            <Render data={data} />
        </main>
    );
}
