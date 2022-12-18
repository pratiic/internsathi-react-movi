import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

import { fetcher } from "../lib/http";

import MovieRatings from "../components/movie-ratings";
import ActorsContainer from "../components/actors-container";
import SecondaryDetails from "../components/secondary-details";

type MovieDetailsProps = {};

const MovieDetails = ({}: MovieDetailsProps) => {
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
                    `movie with imdb ID ${imdbID} could not be found`
                );
            }

            setDetails(data);
        } catch (error: any) {
            setErrorMsg(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <p>Loading movie details...</p>;
    }

    if (errorMsg) {
        return <p>{errorMsg}</p>;
    }

    return (
        <section>
            <div className="flex pt-5 mb-5">
                <div className="flex mr-7">
                    {/* movie poster */}
                    <img
                        src={details?.Poster}
                        alt="poster"
                        className="mr-7 max-h-[350px] min-h-[200px] min-w-[250px] bg-gray-100"
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
                                    <span className="text-black font-semibold">
                                        {details?.imdbRating}
                                    </span>
                                    <span> / 10</span>
                                </span>

                                <span className="text-xs">
                                    ({details?.imdbVotes})
                                </span>
                            </div>
                        </div>

                        {/* movie overview */}
                        <div className="mb-2">
                            <h3>Overview</h3>

                            <p className="text-muted max-w-[500px]">
                                {details?.Plot}
                            </p>
                        </div>
                    </div>
                </div>

                {/* secondary details about the movie */}
                <SecondaryDetails {...details} />
            </div>

            {/* movie ratings */}
            <div className="mb-3">
                <MovieRatings Ratings={details?.Ratings} />
            </div>

            {/* movie actors */}
            <ActorsContainer actors={details?.Actors} />
        </section>
    );
};

export default MovieDetails;
