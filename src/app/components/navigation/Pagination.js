import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
    // number of pages
    pages = 1,
    // current page
    page = 1,
    // useState set page function
    setPage = () => {},
    // function to sort by newest
    sortNew = () => {},
    // function to sold by oldest
    sortOld = () => {},
    // function to sort by random
    sortRandom = () => {},
    // default shows filters
    showFilters = true,
    showEnd = false,
}) => {
    // state to see if right dots
    const [dotsRight, setDotsRight] = useState(true);
    // page numbers
    const [pageElems, setPageElems] = useState(() => {
        let maxIndex = pages < 5 ? pages : 5;

        let line;
        // page array to be returned
        const pageArr = [];
        // loop to create page icons
        for (let i = 1; i <= maxIndex; i++) {
            line = (
                <div onClick={() => setPage(i)} className="pagination-icon">
                    <p>{i}</p>
                </div>
            );
            pageArr.push(line);
        }
        // set first to zero so u can navigate back to start
        pageArr[0] = (
            <div className="pagination-icon selected">
                <p>{1}</p>
            </div>
        );
        // array of pages
        return pageArr;
    });

    // calls functions to run filter
    const updateFilters = (textField) => {
        // always resets page index to 1
        setPage(1);
        switch (textField) {
            case "Newest":
                sortNew();
                break;
            case "Oldest":
                sortOld();
                break;
            case "Random":
                sortRandom();
                break;
            default:
                break;
        }
        // re-render the filter elements
        setSortFilters(
            ["Newest", "Oldest", "Random"].map((text, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => updateFilters(text)}
                        className={
                            textField == text
                                ? "sort-box active-sort-box mar-right-8 mar-left-8"
                                : "sort-box mar-right-8 mar-left-8"
                        }
                    >
                        <h5>{text}</h5>
                    </div>
                );
            }),
        );
    };

    // render filter elements
    const [sortFilters, setSortFilters] = useState(
        ["Newest", "Oldest", "Random"].map((text, index) => {
            return (
                <div
                    key={index}
                    onClick={() => updateFilters(text)}
                    className={
                        text == "Newest"
                            ? "sort-box active-sort-box mar-right-8 mar-left-8"
                            : "sort-box mar-right-8 mar-left-8"
                    }
                >
                    <h5>{text}</h5>
                </div>
            );
        }),
    );

    // re-render the navigation elements on page or pages change
    useEffect(() => {
        setPageElems((prev) => {
            // set maxIndex pages count if less than 5
            // or if current page is within 5 of the maximum page count
            // (Ex. Current page is 20/25) then set maxIndex to pages
            // else set max index to page + 5
            let maxIndex =
                pages < 5
                    ? pages
                    : pages - page <= 5
                      ? page + (pages - page)
                      : page + 5;

            let line;
            // array  that will hold the page number elements
            const pageArr = [];
            // formula to find the page start number
            // first page to 1 if pages less than 5
            // else if pages - page less than equals 5
            const pageStart =
                pages - page < 5 && pages < 5
                    ? 1
                    : pages - page <= 5
                      ? page - (5 - (pages - page))
                      : page;
            // offsets elements by 3 if page count greater then 4
            // this is to have elements on right and left side
            let offSet = pages - page > 4 ? 3 : 0;

            for (let i = pageStart - 3; i <= maxIndex - offSet; i++) {
                if (i < 1) continue;
                line = (
                    <div
                        onClick={() => setPage(i)}
                        className={
                            i == page
                                ? "pagination-icon selected"
                                : "pagination-icon"
                        }
                    >
                        <p>{i}</p>
                    </div>
                );
                pageArr.push(line);
            }
            /* pageArr[page] = (
              <div className="pagination-icon selected">
                <p>{page}</p>
              </div>
            ); */
            // add dots (...) to start of page index array if current page over 5
            // then add a 1 in front of it
            if (page > 5) {
                pageArr.unshift(
                    <div className="mar-right-8 mar-left-8">
                        <p>...</p>
                    </div>,
                );
                pageArr.unshift(
                    <div onClick={() => setPage(1)} className="pagination-icon">
                        <p>1</p>
                    </div>,
                );
            }
            // add dots (...) to end of page array if current page not
            // within 4 of pages length
            // then add the total page count to the end
            if (pages - page > 4) {
                pageArr.push(
                    <div className="mar-right-8 mar-left-8">
                        <p>...</p>
                    </div>,
                );
                if (showEnd) {
                    pageArr.push(
                        <div
                            onClick={() => setPage(pages)}
                            className="pagination-icon"
                        >
                            <p>{pages}</p>
                        </div>,
                    );
                }
            } else {
            }

            return pageArr;
        });
    }, [page, pages]);

    return (
        <div>
            <div className="holder mar-bottom-16">
                {/** Show left icon if page greater than 1 **/}
                {page > 1 && (
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        onClick={() => setPage(page - 1)}
                        className="contrast icon-sssm mar-left-16"
                    />
                )}
                {/** Render the page element numbers **/}
                {pageElems} {/** Show next butter if not at last page **/}
                {page < pages && (
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        onClick={() => setPage(page + 1)}
                        className="contrast icon-sssm mar-left-16"
                    />
                )}
            </div>
            {/** Show filters if true **/}
            {showFilters && (
                <div className="flex justify-center flex-wrap">
                    {sortFilters}
                </div>
            )}
        </div>
    );
};

export default Pagination;
