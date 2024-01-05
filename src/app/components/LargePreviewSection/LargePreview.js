"use client";
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import Rating from "@/app/components/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ReactCommonmark from "react-commonmark";

const Cont = styled.div`\
    display: flex;
    img {
        width: 230px;
        height: 318px;
    }
  border-bottom: 4px solid ${(props) => props.colors.darkPurple};
  margin-bottom: 16px;
`;

const LargePreview = ({
    title,
    id,
    favourites,
    image,
    averageScore,
    description,
}) => {
    return (
        <Cont colors={COLORS}>
            <div>
                <img
                    src={image}
                    alt={`${title} preview`}
                    className="mar-bottom-16"
                />
                <h5 className="mar-bottom-8">{title}</h5>
                <div className="mar-bottom-8 flex align-center">
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="icon-sm icon-purple mar-right-8"
                    />
                    <p className="small">{favourites}</p>
                </div>
                <div className="">
                    <Rating percent={averageScore} />
                </div>
            </div>

            <div className="px-16 py-16">
                <div className="black-line mar-bottom-16"></div>
                <ReactCommonmark source={description} />
            </div>
        </Cont>
    );
};

export default LargePreview;
