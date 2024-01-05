"use client";

import styled from "styled-components";
import COLORS from "@/app/data/colors";
import LargePreview from "@/app/components/LargePreviewSection/LargePreview";

const Cont = styled.div``;

const LargePreviewSection = ({ title, mediaList }) => {
    console.log("mediaList");
    console.log(mediaList);
    const animeElems = mediaList.map((media, index) => {
        return (
            <LargePreview
                key={index}
                title={media.title.english}
                id={media.id}
                favourites={media.favourites}
                image={media.coverImage.large}
                averageScore={media.averageScore}
                description={media.description}
            />
        );
    });
    return (
        <Cont colors={COLORS} class="default-page">
            <h1 className="mar-bottom-32">{title}</h1>

            <div className="content-box">{animeElems}</div>
        </Cont>
    );
};

export default LargePreviewSection;
