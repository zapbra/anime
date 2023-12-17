"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import COLORS from "../data/colors";
import ContentSection from "../components/ContentSection";
import CharacterPreview from "../components/ContentSection/CharacterPreview";
import Search from "@/app/components/search";
import {globalSearch} from "@/app/lib/fetching";

const Cont = styled.div`
    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

// iterates the render increase/offset

const Render = ({ data }) => {
    const executeSearch = async (searchText) => {
        const result = await globalSearch(searchText);

        console.log('result');
        console.log(result);
    };

    return (
        <Cont colors={COLORS}>
            <Search
                executeSearch = {executeSearch}
            />
            {" "}
            <ContentSection
                title={"ANIME"}
                data={data.data.AnimeSearch.media}
            />{" "}
            <ContentSection
                title={"MANGA"}
                data={data.data.MangaSearch.media}
            />
            <CharacterPreview
                title={"CHARACTER"}
                data={data.data.CharacterSearch.characters}
            />
        </Cont>
    );
};

export default Render;
