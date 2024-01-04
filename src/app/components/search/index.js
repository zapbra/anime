"use client";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/app/data/colors";

const Cont = styled.div`
    // max-width: 1000px;
    margin: 0 auto 48px;
    background-color: ${(props) => props.colors.lightPink};
    padding: 16px 32px;
`;

const Search = ({ text, setText, searchFunction }) => {
    // perform data search across all genres
    // on search button click
    const submitForm = (e) => {
        e.preventDefault();
        searchFunction(text);
    };
    return (
        <Cont colors={COLORS}>
            <form onSubmit={submitForm}>
                <div className="flex align-center justify-center">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="search..."
                        className="mar-right-16"
                    />
                    <button className="button" type="submit">
                        <h5>Search</h5>
                    </button>
                </div>
            </form>
        </Cont>
    );
};

export default Search;
