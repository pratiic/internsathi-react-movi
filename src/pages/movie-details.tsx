import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetcher } from "../lib/http";

import RatingsContainer from "../components/ratings-container";
import ActorsContainer from "../components/actors-container";
import SecondaryDetails from "../components/secondary-details";
import LoadingStatus from "../components/loading-status";
import Overview from "../components/overview";

const MovieDetails = () => {
    const [details, setDetails] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { imdbID } = useParams();

    useEffect(() => {
        fetchDetails();
    }, []);

    useEffect(() => {
        if (details) {
            document.title = details?.Title;
        }
    }, [details]);

    const fetchDetails = async (): Promise<void> => {
        try {
            setIsLoading(true);
            const data = await fetcher(`i=${imdbID}&plot=full`);

            // if successful -> data contains movie details
            // if unsuccessful -> data contains Response: "False"

            if (data.Response === "False") {
                throw new Error(
                    `movie with imdb ID - ${imdbID} - could not be found`
                );
            }

            setDetails(data);
            setErrorMsg("");
        } catch (error: any) {
            setErrorMsg(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <LoadingStatus text="Loading movie details..." />;
    }

    if (errorMsg) {
        return <p className="error">{errorMsg}</p>;
    }

    return (
        <section>
            <div className="flex flex-col 850:flex-row gap-3 850:gap-7 pt-5 mb-7">
                <div className="flex flex-col 500:flex-row gap-3 500:gap-5">
                    {/* movie poster */}
                    <img
                        src={details?.Poster}
                        alt="poster"
                        className="max-h-[275px] min-h-[200px] w-[200px] bg-gray-100 rounded"
                    />

                    <div>
                        {/* movie title and release year */}
                        <h2 className="text-2xl tracking-wide max-w-[500px]">
                            {details?.Title}{" "}
                            <span className="text-muted text-xl">
                                ({details?.Year})
                            </span>
                        </h2>

                        <div className="flex flex-col mb-3 mt-1 text-sm text-muted space-y-1">
                            {/* genres of the movie */}
                            <span>{details?.Genre}</span>

                            {/* movie release date */}
                            <span>{details?.Released}</span>
                        </div>

                        {/* imdb rating */}
                        <div className="flex items-center text-muted text-sm mb-3">
                            {/* <StarIcon className="icon text-yellow-400" /> */}
                            <img
                                src="/icons/imdb.png"
                                alt=""
                                className="w-5 mr-2"
                            />

                            <div className="flex flex-col">
                                <span>
                                    {details?.imdbRating === "N/A" ? (
                                        <span className="text-muted">N/A</span>
                                    ) : (
                                        <React.Fragment>
                                            <span className="text-black font-semibold">
                                                {details?.imdbRating}
                                            </span>
                                            <span> / 10</span>
                                        </React.Fragment>
                                    )}
                                </span>

                                <span className="text-xs">
                                    ({details?.imdbVotes} votes)
                                </span>
                            </div>
                        </div>

                        {/* movie overview */}
                        <Overview overview={details?.Plot} />
                    </div>
                </div>

                {/* secondary details about the movie */}
                <SecondaryDetails {...details} />
            </div>

            {/* movie ratings */}
            <div className="mb-5">
                <RatingsContainer Ratings={details?.Ratings} />
            </div>

            {/* movie actors */}
            <ActorsContainer actors={details?.Actors} />
        </section>
    );
};

export default MovieDetails;
