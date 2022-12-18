type Rating = {
    Source: string;
    Value: string;
};

type MovieRatingsProps = {
    imdbRating: string;
    ratings: Rating[];
};

const MovieRatings = ({ imdbRating, ratings }: MovieRatingsProps) => {
    return (
        <div>
            <h4>Ratings</h4>
        </div>
    );
};

export default MovieRatings;
