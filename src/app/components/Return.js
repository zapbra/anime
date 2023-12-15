"use client";
import Link from 'next/link';
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import {FaArrowTurnDown} from "react-icons/fa6";

const Cont = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    cursor:pointer;
    box-shadow: 5px 5px ${props => props.colors.red};
    background-color: ${props => props.colors.darkPurple};
    .icon-sm {
        color: ${props => props.colors.pink};
    }
    h5 {
        color: ${props => props.colors.pink};
    }
    &:active {
        box-shadow:none;
        top: 5px;
        left: 5px;
    }
    
`;

const Return = () => {
    return (
        <Link href={'/'}>
            <Cont colors = {COLORS} >
                <FaArrowTurnDown className='icon-sm icon-rotate mar-right-8'/>
                <h5>Back To Home</h5>
            </Cont>
        </Link>
    )
};

export default Return;

