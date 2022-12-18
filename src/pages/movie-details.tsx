import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetcher } from "../lib/http";

import GenreContainer from "../components/genre-container";
import MovieRatings from "../components/movie-ratings";
import InfoTag from "../components/info-tag";

type MovieDetailsProps = {};

const MovieDetails = ({}: MovieDetailsProps) => {
    const [details, setDetails] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { imdbID } = useParams();

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async (): Promise<void> => {
        try {
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
            console.log(error);
        }
    };

    if (isLoading) {
        return <p>Loading movie details...</p>;
    }

    if (errorMsg) {
        return <p>{errorMsg}</p>;
    }

    console.log(details);

    return (
        <section className="flex justify-between pt-3">
            <div className="flex">
                {/* movie poster */}
                <img
                    src={details?.Poster}
                    alt="poster"
                    className="max-w-[250px] mr-7 max-h-[350px]"
                />

                <div>
                    {/* movie title and release year */}
                    <h2 className="text-2xl tracking-wide">
                        {details?.Title}{" "}
                        <span className="text-muted text-xl">
                            ({details?.Year})
                        </span>
                    </h2>

                    <div className="flex flex-col mb-3 text-sm text-muted">
                        {/* genres of the movie */}
                        <span>{details?.Genre}</span>

                        {/* movie release date */}
                        <span className="text-xs">{details?.Released}</span>
                    </div>

                    {/* movie ratings */}
                    {/* <MovieRatings
                    imdbRating={details?.imdbRating}
                    ratings={details?.ratings}
                /> */}

                    {/* movie overview */}
                    <div className="mb-2">
                        <h3>Overview</h3>

                        <p className="text-muted max-w-[500px]">
                            {details?.Plot}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                {/* movie director */}
                <InfoTag title="Director" value={details?.Director} />
                {/* movie writer */}
                <InfoTag title="Writer" value={details?.Writer} />
                {/* box office earnings */}
                <InfoTag title="Box office" value={details?.BoxOffice} />
                {/* run time of the movie */}
                <InfoTag title="Run time" value={details?.Runtime} />
                {/* rated eg, pg-13, r-rated */}
                <InfoTag title="Rated" value={details?.Rated} />
                {/* dvd release date */}
                <InfoTag title="DVD release" value={details?.DVD} />
            </div>
        </section>
    );
};

export default MovieDetails;
