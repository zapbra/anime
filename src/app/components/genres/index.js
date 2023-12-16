"use client";
import styled from "styled-components";
import Link from 'next/link';
import COLORS from "@/app/data/colors";
import Genre from './Genre';

const Cont = styled.div`
    background-color: ${props => props.colors.lightPink};
    padding: 8px 16px;
`;

const Genres = ({genreList}) => {
    const genreElems = genreList.map(genre => {
        return (
            <Genre
                genre = {genre}
            />
        )
    });
    return (
        <Cont colors = {COLORS}>
            {genreElems}
        </Cont>
    )
};

export default Genres;