import React from "react";
import styled from "styled-components";
import COLORS from "../../data/colors";
import Image from "next/image";
import Link from "next/link";

const Cont = styled.div`
    margin-right: 16px;
    max-width: 140px;
    margin-bottom: 16px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        text-decoration-color: ${props=> props.colors.darkPurple};
        img {
            opacity: 0.9;
        }
    }
`;

const AnimePreview = ({ title, img, id, type }) => {
    return (
        <Link href={`${type}/${id}`}>
            <Cont colors={COLORS}>
                <Image
                    alt={title}
                    src={img}
                    objectFit="cover"
                    width={140}
                    height={175}
                />
                <p className='bold'>{title}</p>
            </Cont>
        </Link>
    );
};

export default AnimePreview;
