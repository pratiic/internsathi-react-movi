import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
};

const MovieCard = ({ Title, Year, imdbID, Poster }: MovieCardProps) => {
    const navigate = useNavigate();

    const handleMovieClick = (event: MouseEvent) => {
        // navigate to movie details page
        navigate(`/movies/${imdbID}`);
    };

    return (
        <div
            className="cursor-pointer h-fit hover:scale-103 hover:shadow-lg hover:shadow-gray-100 active:scale-100 active:shadow-none transition-scale duration-200"
            onClick={handleMovieClick}
        >
            {/* movie poster */}
            <img
                src={Poster}
                alt="poster"
                className="image rounded-tr rounded-tl min-h-[200px] max-h-[250px] w-full bg-gray-50"
            />

            <div className="bg-gray-100 px-2 py-3 rounded-bl rounded-br">
                {/* movie title */}
                <h3 className="font-semibold tracking-wide leading-tight mb-1 text-gray-700">
                    {Title}
                </h3>
                {/* movie release year */}
                <h5 className="text-sm text-muted-x">{Year}</h5>
            </div>
        </div>
    );
};

export default MovieCard;
