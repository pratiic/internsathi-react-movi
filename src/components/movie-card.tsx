import { Link } from "react-router-dom";

type MovieCardProps = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
};

const MovieCard = ({ Title, Year, imdbID, Poster }: MovieCardProps) => {
    return (
        <Link
            to={`/movies/${imdbID}`}
            className="cursor-pointer h-fit hover:scale-103 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-none active:scale-100 active:shadow-none transition-scale duration-200"
        >
            {/* movie poster */}
            <img
                src={Poster}
                alt="poster"
                className="image rounded-tr rounded-tl min-h-[200px] max-h-[250px] w-full bg-gray-50 dark:bg-gray-700"
            />

            <div className="bg-gray-100 dark:bg-gray-700 px-2 py-3 rounded-bl rounded-br">
                {/* movie title */}
                <h3 className="font-semibold tracking-wide leading-tight mb-1 black-white">
                    {Title}
                </h3>
                {/* movie release year */}
                <h5 className="text-sm text-muted">{Year}</h5>
            </div>
        </Link>
    );
};

export default MovieCard;
