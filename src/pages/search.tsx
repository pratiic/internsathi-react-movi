import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetcher } from "../lib/http";

import CardsGrid from "../components/cards-grid";
import LoadingStatus from "../components/loading-status";
import Button from "../components/button";
import Spinner from "../components/spinner";

const Search = () => {
    const [results, setResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { query } = useParams();

    useEffect(() => {
        // when the page first loads and every time the query changes, search movies
        searchMovies();

        document.title = `Search | ${query}`;
    }, [query, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        setResults([]);
        setTotalResults(0);
    }, [query]);

    const searchMovies = async () => {
        try {
            if (currentPage === 1) {
                setResults([]);
                setIsLoading(true);
            } else {
                setIsLoadingMore(true);
            }

            const { Search, totalResults, Response } = await fetcher(
                `s=${query}&page=${currentPage}`
            );

            if (Response === "True") {
                // movie is found
                if (currentPage === 1) {
                    setResults(Search);
                } else {
                    setResults(results.concat(Search));
                }

                setTotalResults(totalResults);

                if (currentPage === 1) {
                    // when the first page loads, set the number of total pages
                    setTotalPages(Math.ceil(totalResults / 10));
                }

                return setErrorMsg("");
            }

            throw new Error(
                `No movie named - ${query} - was found. Please try with a different name.`
            );
        } catch (error: any) {
            setErrorMsg(error.message);
        } finally {
            setIsLoading(false);
            setIsLoadingMore(false);
        }
    };

    const handleLoadMoreClick = () => {
        setCurrentPage(currentPage + 1);
    };

    if (isLoading) {
        return <LoadingStatus text="Searching movies..." />;
    }

    if (errorMsg) {
        return <p className="error">{errorMsg}</p>;
    }

    return (
        <div>
            {/* results info */}
            <div className="mb-5 text-gray-500">
                <p className="text-lg">
                    Showing results for -{" "}
                    <span className="text-blue-400 font-semibold">{query}</span>
                </p>
                <p className="text-sm font-semibold">
                    {results.length} of {totalResults} results
                </p>
            </div>

            <CardsGrid list={results} />

            {currentPage < totalPages && (
                <div className="mt-7 w-fit mx-auto">
                    {isLoadingMore ? (
                        <Spinner />
                    ) : (
                        <Button handleClick={handleLoadMoreClick}>
                            load more
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
