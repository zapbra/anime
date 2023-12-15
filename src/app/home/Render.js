"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import COLORS from "../data/colors";
import ContentSection from "../components/ContentSection";
import CharacterPreview from "../components/ContentSection/CharacterPreview";

const Cont = styled.div`
    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

// iterates the render increase/offset

const Render = ({ data }) => {
    return (
        <Cont colors={COLORS}>
            {" "}
            {/*<ContentSection*/}
            {/*    title={"ANIME"}*/}
            {/*    data={data.data.AnimeSearch.media}*/}
            {/*/>{" "}*/}
            {/*<ContentSection*/}
            {/*    title={"MANGA"}*/}
            {/*    data={data.data.MangaSearch.media}*/}
            {/*/>*/}
            <CharacterPreview
                title={"CHARACTER"}
                data={data.data.CharacterSearch.characters}
            />
        </Cont>
    );
};

export default Render;
