"use client";
import {useState} from "react";
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import {FaHeart} from "react-icons/fa";

const Cont = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
    .fav-content {
        background-color: ${props => props.colors.green};
        padding: 8px 12px;
        p {
            color: ${props => props.colors.red};
        }
    }
`;


const Favorites = ({favoriteCount}) => {
    return (
        <Cont colors = {COLORS}>
            <div className="fav-content flex align-center">
                <FaHeart className='icon-sm red mar-right-8' />
                <p className='bold'>
                    {favoriteCount}
                </p>

            </div>

        </Cont>
    )
}

export default Favorites;