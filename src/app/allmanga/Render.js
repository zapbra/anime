"use client";
import ContentSection from "@/app/components/ContentSection";
import Search from "@/app/components/search";
import { useState } from "react";
import { getAnimeMangaBySearch } from "@/app/lib/fetching";

const Render = ({ dataFetch }) => {
    const [data, setData] = useState(dataFetch);

    const [text, setText] = useState("");

    const searchFunction = async (text) => {
        const mangasFetch = await getAnimeMangaBySearch({
            page: 1,
            query: text,
            type: "MANGA",
        });
        console.log("ran");
        console.log(mangasFetch);
        setData(mangasFetch.data.Page);
    };

    return (
        <div>
            <Search
                text={text}
                setText={setText}
                searchFunction={searchFunction}
            />

            <ContentSection
                title="Manga"
                data={data.media}
                pageInfo={data.pageInfo}
                type="MANGA"
            />
        </div>
    );
};

export default Render;
