"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import COLORS from "@/app/data/colors";
import AnimePreview from "./AnimePreview";

const Cont = styled.div`
    margin-bottom: 128px;
    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

// iterates the render increase/offset
const RENDER_ITERATOR = 20;

const ContentSection = ({ data, title }) => {
    const scrollRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [page, setPage] = useState(1);
    // all fetched anime titles
    const [animeTitles, setAnimeTitles] = useState(data);
    const [renderLength, setRenderLength] = useState(RENDER_ITERATOR);

    const renderPreviews = () => {
        const animeArr = [];
        // renders up to renderLength amount minus RENDER_ITERATOR offset
        for (let i = renderLength - RENDER_ITERATOR; i < renderLength; i++) {
            animeArr.push(
                <AnimePreview
                    title={animeTitles[i].title.english}
                    img={animeTitles[i].coverImage.large}
                />
            );
        }
        return animeArr;
    };
    // anime title elements
    const [animeTitleElems, setAnimeTitleElems] = useState(renderPreviews);

    useEffect(() => {
        setAnimeTitleElems(renderPreviews);
    }, [renderLength]);

    console.log("data");
    console.log(data);

    const shiftPage = (dir) => {
        let scrollState = false;
        let curRenderLength;
        // next page
        if (dir == "right") {
            // if render offset greater than anime length
            if (renderLength + RENDER_ITERATOR > animeTitles.length) {
                curRenderLength = animeTitles.length;
                // de-activate click right button
                rightRef.current.firstElementChild.classList.add(
                    "icon-inactive"
                );
                if (curRenderLength > renderLength) {
                    setPage(page + 1);
                    // scroll
                    scrollState = true;
                }
                // if full render
            } else {
                setPage(page + 1);
                scrollState = true;
                curRenderLength = renderLength + RENDER_ITERATOR;
                // check if left button needs to be set active
                if (
                    leftRef.current.firstElementChild.classList.contains(
                        "icon-inactive"
                    )
                ) {
                    leftRef.current.firstElementChild.classList.remove(
                        "icon-inactive"
                    );
                }
            } // prev page
        } else {
            // render offset too far left
            if (renderLength - RENDER_ITERATOR < RENDER_ITERATOR) {
                curRenderLength = RENDER_ITERATOR;
                // de-activate click left button
                leftRef.current.firstElementChild.classList.add(
                    "icon-inactive"
                );

                // decrease page number
                if (curRenderLength < renderLength) {
                    scrollState = true;
                    // scroll
                    setPage(page - 1);
                }
                // full left render
            } else {
                scrollState = true;
                setPage(page - 1);
                curRenderLength = renderLength - RENDER_ITERATOR;
                // check if right button needs to be set active
                if (
                    rightRef.current.firstElementChild.classList.contains(
                        "icon-inactive"
                    )
                ) {
                    rightRef.current.firstElementChild.classList.remove(
                        "icon-inactive"
                    );
                }
            }
        }
        if (scrollState) {
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
        setRenderLength(curRenderLength);
    };

    return (
        <Cont colors={COLORS}>
            <section>
                <h1 className="mar-bottom-16" ref={scrollRef}>
                    {title} LIST
                </h1>
                <div className="section-content ">
                    {/* Title elements */}
                    <div className="flex flex-wrap space-around ">
                        {animeTitleElems}
                    </div>
                    {/* End of title elements */}
                    {/* Navigation */}
                    <div className="navigation">
                        <div ref={leftRef}>
                            <BsChevronDoubleLeft
                                ref={leftRef}
                                onClick={() => shiftPage("left")}
                                className="icon-med icon-purple icon-inactive"
                            />
                        </div>
                        <h4 className="grey">{page}</h4>
                        <div ref={rightRef}>
                            <BsChevronDoubleRight
                                onClick={() => shiftPage("right")}
                                className="icon-med icon-purple"
                            />
                        </div>
                    </div>
                    {/* End of Navigation */}
                </div>
            </section>
        </Cont>
    );
};

export default ContentSection;
