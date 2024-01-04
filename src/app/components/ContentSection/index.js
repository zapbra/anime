"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import COLORS from "@/app/data/colors";
import AnimePreview from "./AnimePreview";
import Pagination from "@/app/components/navigation/Pagination";
import { getAnimeMangaBySearch } from "@/app/lib/fetching";

const Cont = styled.div`
    margin-bottom: 128px;
    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

// iterates the render increase/offset
const RENDER_ITERATOR = 25;

const ContentSection = ({ data, title, pageInfo, type }) => {
    // total number of possible pages to fetch
    // element to scroll to on pagination click
    const scrollRef = useRef(null);
    // page number for fetching titles
    const [pageFetch, setPageFetch] = useState(1);
    // left navigation button
    const leftRef = useRef(null);
    // right navigation button
    const rightRef = useRef(null);
    // the current page
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(pageInfo.total / pageInfo.perPage);
    // all fetched anime titles
    const [animeTitles, setAnimeTitles] = useState(data);

    const renderPreviews = () => {
        // range of element to render
        const renderLength = page * RENDER_ITERATOR;
        if (renderLength > animeTitles) {
        }

        const animeArr = [];
        // renders up to renderLength amount minus RENDER_ITERATOR offset
        for (let i = renderLength - RENDER_ITERATOR; i < renderLength; i++) {
            animeArr.push(
                <AnimePreview
                    title={animeTitles[i].title}
                    img={animeTitles[i].coverImage.large}
                    id={animeTitles[i].id}
                    type={title.toLowerCase()}
                />,
            );
        }
        return animeArr;
    };
    // anime title elements
    const [animeTitleElems, setAnimeTitleElems] = useState(renderPreviews);

    // Fetches more mangas and updates the anime titles
    const fetchAndUpdateTitles = async () => {
        // fetch the mangas
        const data = await getAnimeMangaBySearch({
            query: null,
            page: pageFetch + 1,
            type: type,
        });
        const mangas = data.data.Page.media;
        // updating the anime titles will call use effect to update the anime title elements
        setAnimeTitles((prev) => {
            return [...prev, ...mangas];
        });

        setPageFetch((prev) => {
            return prev + 1;
        });
    };

    useEffect(() => {
        // if page will extend over local titles, then fetch more
        if (page * RENDER_ITERATOR > animeTitles.length) {
            fetchAndUpdateTitles();
            // render previews directly if fetch not required
        } else {
            setAnimeTitleElems(renderPreviews());
        }
    }, [page]);

    useEffect(() => {
        setAnimeTitleElems(renderPreviews);
    }, [animeTitles]);

    useEffect(() => {
        setAnimeTitles(data);
    }, [data]);

    return (
        <Cont colors={COLORS}>
            <section>
                <h1 className="mar-bottom-16" ref={scrollRef}>
                    {title} List
                </h1>
                <div className="section-content ">
                    {/* Title elements */}
                    <div className="flex flex-wrap space-around content-holder">
                        {animeTitleElems}
                    </div>
                    {/* End of title elements */}

                    {/* Navigation */}
                    <div className="navigation">
                        <div>
                            <Pagination
                                pages={pages}
                                page={page}
                                setPage={setPage}
                            />
                        </div>

                        {/*<div ref={leftRef}>*/}
                        {/*    <BsChevronDoubleLeft*/}
                        {/*        ref={leftRef}*/}
                        {/*        onClick={() => shiftPage("left")}*/}
                        {/*        className="icon-med icon-purple icon-inactive"*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<h4 className="grey">{page}</h4>*/}
                        {/*<div ref={rightRef}>*/}
                        {/*    <BsChevronDoubleRight*/}
                        {/*        onClick={() => shiftPage("right")}*/}
                        {/*        className="icon-med icon-purple"*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                    {/* End of Navigation */}
                </div>
            </section>
        </Cont>
    );
};

export default ContentSection;
