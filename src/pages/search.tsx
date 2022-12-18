import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetcher } from "../lib/http";

import CardsGrid from "../components/cards-grid";
import { setResults } from "../redux/slices/search-slice";

type SearchProps = {};

const Search = ({}: SearchProps) => {
    const [totalResults, setTotalResults] = useState(0);

    const { results } = useSelector((state: any) => state.search);
    const dispatch = useDispatch();
    const { query } = useParams();

    useEffect(() => {
        // when the page first loads and every time the query changes, search movies
        searchMovies();

        document.title = `Search | ${query}`;
    }, [query]);

    useEffect(() => {
        return () => {
            dispatch(setResults([]));
        };
    }, []);

    const searchMovies = async () => {
        try {
            const { Search, totalResults, Response } = await fetcher(
                `s=${query}&page=1`
            );
            if (Response === "True") {
                // movie is found
                dispatch(setResults(Search));
                setTotalResults(totalResults);
            }
        } catch (error) {}
    };

    return (
        <div>
            {/* results info */}
            <div className="mb-3 text-gray-500">
                <p className="text-lg">
                    Showing results for -{" "}
                    <span className="text-blue-400 font-semibold">{query}</span>
                </p>
                <p className="text-sm font-semibold">
                    {results.length} of {totalResults} results
                </p>
            </div>

            <CardsGrid list={results} />
        </div>
    );
};

export default Search;
