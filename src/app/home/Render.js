"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import COLORS from "../data/colors";
import ContentSection from "../components/ContentSection";
import CharacterPreview from "../components/ContentSection/CharacterPreview";
import Search from "@/app/components/search";
import { globalSearch } from "@/app/lib/fetching";

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
    };

    console.log("data");
    console.log(data);
    return (
        <Cont colors={COLORS}>
            <Search executeSearch={executeSearch} />{" "}
        </Cont>
    );
};

export default Render;
