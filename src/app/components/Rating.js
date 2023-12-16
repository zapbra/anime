"use client";
import styled from "styled-components";
import COLORS from "@/app/data/colors";

const Cont = styled.div`
    background-color: ${props => props.colors.lightPink};
    padding: 8px 16px;
    max-width: 120px;
    width: 100%;
    .rating-bar {
        position: relative;
        width: 100%;
        height:32px;
        background-color: ${props => props.colors.lightGrey};
    }
    .rating-percent {
        
        height: 100%;
        position: absolute;
        
    }
`;

const colors = {
    background: {
        color1: "rgb(40, 200, 40)",
        color2: "rgb(25, 225, 25)"
    }
};

const Rating = ({ percent }) => {
    // is green if percent over 50
    if (percent >= 50) {
        colors.background = {
            color1: "rgb(40, 200, 40)",
            color2: "rgb(25, 225, 25)"
        };
    } else {
        colors.background = {
            color1: "rgb(200, 40, 40)",
            color2: "rgb(225, 25, 25)"
        };
    }


    return (
        <Cont colors = {COLORS}>
            <h5 className='mar-bottom-8'>Rating</h5>
            <div className="rating-bar">
                <div className="rating-percent" style={{width: `${percent}%`, background: `linear-gradient(${colors.background.color1}, ${colors.background.color2})`}}></div>
            </div>
        </Cont>
    )
};

export default Rating;