"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa6";
import Rating from "@/app/components/Rating";
import Genres from "@/app/components/genres";
import ReactCommonmark from "react-commonmark";
import EpisodeSection from "@/app/anime/components/EpisodeSection";
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

    iframe {
        max-width: 100%;
        @media only screen and (max-width: 300px) {
            height: 200px !important;
        }
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

const Anime = ({ anime }) => {
    // console.log("anime");
    // console.log(anime);
    // set dates
    const startDate = new Date(
        anime.startDate.year,
        anime.startDate.month,
        anime.startDate.day,
    );
    const endDate = new Date(
        anime.endDate.year,
        anime.endDate.month,
        anime.endDate.day,
    );
    const [allCharFetched, setAllCharFetched] = useState(false);
    const [charPage, setCharPage] = useState(1);
    const [characterElems, setCharacterElems] = useState(
        anime.characters.edges.map((character, index) => {
            return <Character key={index} character={character.node} />;
        }),
    );

    // fetches next page of characters (25) and render them
    const fetchMoreCharacters = async () => {
        // fetch characters
        const charactersFetch = await getAnimeOrMangaCharacters({
            id: anime.id,
            type: "ANIME",
            page: charPage + 1,
        });
        console.log("resss");
        console.log(charactersFetch);
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

    const embedUrl = `https://www.youtube.com/embed/${anime.trailer?.id}`;

    return (
        <Cont colors={COLORS}>
            <div className="image-header">
                <div className="overlay"></div>
                <img src={anime.bannerImage} alt={anime.title} />
            </div>

            <div className="header-content flex space-between mar-bottom-32">
                {/** Left header section **/}
                <div className="left-header flex space-between">
                    <div className="image-holder">
                        <img
                            src={anime.coverImage.extraLarge}
                            alt={anime.title.userPreferred}
                            fill="true"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="header-text-section">
                        <h1 className="mar-bottom-16">{anime.title.english}</h1>
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
                                        <p className="bold">Episodes</p>
                                    </td>
                                    <td>
                                        <p className="bold">{anime.episodes}</p>
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
                        <Rating percent={anime.averageScore} />
                    </div>
                    <Genres genreList={anime.genres} />
                </div>

                {/** End of right header section **/}
            </div>

            <div className="content-box mar-bottom-32">
                <div className="text-content">
                    <h2>About This Anime</h2>
                    <div className="black-line mar-bottom-16"></div>
                    <ReactCommonmark source={anime.description} />
                </div>
            </div>

            {/** Episodes **/}
            <div className="content-box">
                <div className="text-content">
                    <h2>Episodes</h2>
                    <div className="black-line mar-bottom-16"></div>

                    <EpisodeSection episodes={anime.streamingEpisodes} />
                </div>
            </div>
            {/** End of episodes **/}
            {/** Trailer **/}
            {anime.trailer && (
                <div className="content-box">
                    <div className="text-content">
                        <h2>Trailer</h2>
                        <div className="black-line mar-bottom-16"></div>

                        <iframe
                            src={embedUrl}
                            width="560"
                            height="315"
                            allowFullScreen
                            title={`${anime.title} trailer`}
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            )}

            {/** End of trailer **/}
            {/** Characters **/}
            <div className="content-box mar-bottom-64">
                <div className="text-content padding-bottom-64">
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

export default Anime;
