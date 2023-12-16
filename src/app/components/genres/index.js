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
    const genreElems = genreList.map((genre, index) => {
        return (
            <Genre
                genre = {genre}
                key = {index}
            />
        )
    });
    return (
        <Cont colors = {COLORS}>
            <h5 className='mar-bottom-8'>Genres</h5>
            {genreElems}
        </Cont>
    )
};

export default Genres;