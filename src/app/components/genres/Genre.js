"use client";
import Link from 'next/link';
import styled from "styled-components";
import COLORS from "@/app/data/colors";

const Cont = styled.div`
    border-radius: 8px;
    background-color: ${props => props.colors.darkPurple};
    padding: 4px 8px;
    margin-bottom: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    p {
        transition: color .25s ease;
        color: ${props => props.colors.lightGrey};
        &:hover {
            color: ${props => props.colors.lightPink};
        }
    }
    &:hover {
        box-shadow: none;
    }
`;

const Genre = ({genre}) => {

    return (
        <Link href = {''}>
            <Cont colors = {COLORS}>
                <p className="bold">{genre}</p>
            </Cont>
        </Link>
    )
};

export default Genre;