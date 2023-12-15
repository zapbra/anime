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
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [page, setPage] = useState(1);
    // all fetched anime titles
    const [animeTitles, setAnimeTitles] = useState(data);
    const [renderLength, setRenderLength] = useState(RENDER_ITERATOR);

    // returns an array of all the objects to render (character, anime, etc)
    // returns the indexes based on render_iterator offest. Ex. 25-50
    const renderPreviews = () => {
        const animeArr = [];
        // renders up to renderLength amount minus RENDER_ITERATOR offset
        for (let i = renderLength - RENDER_ITERATOR; i < renderLength; i++) {
            console.log('hello');

            animeArr.push(
                <AnimePreview
                    title={
                        animeTitles[i].name.first +
                            " " +
                            animeTitles[i].name.last || ""
                    }
                    img={animeTitles[i].image.large}
                    id = {animeTitles[i].id}
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
        console.log("???");
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
                if (curRenderLength > renderLength) setPage(page + 1);
                // if full render
            } else {
                setPage(page + 1);
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
                if (curRenderLength < renderLength) setPage(page - 1);
                // full left render
            } else {
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
        setRenderLength(curRenderLength);
    };

    return (
        <Cont colors={COLORS}>
            <section>
                <h1 className="mar-bottom-16">{title} LIST</h1>
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
