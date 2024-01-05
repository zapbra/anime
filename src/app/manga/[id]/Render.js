"use client";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa6";
import Rating from "@/app/components/Rating";
import Genres from "@/app/components/genres";
import ReactCommonmark from "react-commonmark";
import Character from "@/app/components/Character";
import { getAnimeOrMangaCharacters } from "@/app/lib/fetching";

const Cont = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    .image-holder {
        position: relative;
        width: 200px;
        height: 300px;
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .header-content {
        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }
        @media only screen and (max-width: 600px) {
            .left-header {
                flex-direction: column;
            }
        }
    }
    .header-text-section {
        padding: 16px;
    }

    .image-header {
        position: relative;
        max-height: 300px;
        overflow: hidden;
        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgb(46, 53, 89);
            background: linear-gradient(
                90deg,
                rgba(46, 53, 89, 1) 0%,
                rgba(255, 255, 255, 0) 51%,
                rgba(46, 53, 89, 1) 100%
            );
            opacity: 0.4;
        }
    }
`;

const Render = ({ manga }) => {
    const startDate = new Date(
        manga.startDate.year,
        manga.startDate.month,
        manga.startDate.day,
    );
    const endDate = new Date(
        manga.endDate.year,
        manga.endDate.month,
        manga.endDate.day,
    );
    const [allCharFetched, setAllCharFetched] = useState(false);
    const [charPage, setCharPage] = useState(1);

    const [characterElems, setCharacterElems] = useState(
        manga.characters.edges.map((character, index) => {
            return <Character key={index} character={character.node} />;
        }),
    );

    const fetchMoreCharacters = async () => {
        // fetch characters
        const charactersFetch = await getAnimeOrMangaCharacters({
            id: manga.id,
            type: "MANGA",
            page: charPage + 1,
        });
        // destructuree
        const characters = charactersFetch.data.Media.characters.edges;
        // responsed with zero characters, so there is no more to fetch, so hide button and exit function
        if (characters.length === 0) {
            setAllCharFetched(true);
            return;
        }
        // add all fetched characters to array
        const charArray = [];
        for (let i = 0; i < characters.length; i++) {
            charArray.push(
                <Character
                    key={i + characterElems.length}
                    character={characters[i].node}
                />,
            );
        }
        // push character elements to array for rendering
        setCharacterElems((prev) => {
            return [...prev, ...charArray];
        });
        // update to next page
        setCharPage((prev) => {
            return prev + 1;
        });
    };

    return (
        <Cont colors={COLORS}>
            <div className="image-header">
                <div className="overlay"></div>
                <img src={manga.bannerImage} alt={manga.title} />
            </div>

            <div className="header-content flex space-between mar-bottom-32">
                {/** Left header section **/}
                <div className="left-header flex space-between">
                    <div className="image-holder">
                        <img
                            src={manga.coverImage.extraLarge}
                            alt={manga.title.userPreferred}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="header-text-section">
                        <h1 className="mar-bottom-16">{manga.title.english}</h1>
                        <table className="styled-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <FaCalendar className="icon-ssm grey" />
                                        <p>Release</p>
                                    </td>
                                    <td>
                                        <p className="bold">
                                            {startDate.toDateString()}
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <FaCalendar className="icon-ssm grey" />
                                        <p>End</p>
                                    </td>

                                    <td>
                                        <p className="bold">
                                            {endDate.toDateString()}
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <p className="bold">Volumes</p>
                                    </td>
                                    <td>
                                        <p className="bold">{manga.volumes}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/** End of left header section **/}

                {/** Right header section **/}
                <div className="">
                    <div className="mar-bottom-16 ">
                        <Rating percent={manga.averageScore} />
                    </div>
                    <Genres genreList={manga.genres} />
                </div>

                {/** End of right header section **/}
            </div>

            <div className="content-box mar-bottom-32">
                <div className="text-content">
                    <h2>About This Manga</h2>
                    <div className="black-line mar-bottom-16"></div>
                    <ReactCommonmark source={manga.description} />
                </div>
            </div>

            {/** Characters **/}
            <div className="content-box">
                <div className="text-content">
                    <h2>Characters</h2>
                    <div className="black-line mar-bottom-16"></div>
                    <div className="flex flex-wrap al">{characterElems}</div>
                    {!allCharFetched && (
                        <button
                            className="button"
                            onClick={fetchMoreCharacters}
                        >
                            <h5>Show more...</h5>
                        </button>
                    )}
                </div>
            </div>
            {/** End of characters **/}
        </Cont>
    );
};

export default Render;
