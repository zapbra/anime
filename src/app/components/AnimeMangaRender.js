"use client";
import ContentSection from "@/app/components/ContentSection";
import Search from "@/app/components/search";
import { useState } from "react";
import { getAnimeMangaBySearch } from "@/app/lib/fetching";

const Render = ({ dataFetch, type, title }) => {
    const [data, setData] = useState(dataFetch);

    const [text, setText] = useState("");

    const searchFunction = async (text) => {
        const animeMangasFetch = await getAnimeMangaBySearch({
            page: 1,
            query: text,
            type: type,
        });

        setData(animeMangasFetch.data.Page);
        return true;
    };

    return (
        <div>
            <Search
                text={text}
                setText={setText}
                searchFunction={searchFunction}
            />

            <ContentSection
                title={title}
                data={data.media}
                pageInfo={data.pageInfo}
                type={type}
            />
        </div>
    );
};

export default Render;
