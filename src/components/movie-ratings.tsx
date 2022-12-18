type Rating = {
    Source: string;
    Value: string;
};

type MovieRatingsProps = {
    Ratings: Rating[];
};

const MovieRatings = ({ Ratings }: MovieRatingsProps) => {
    const hasValue = (value: string): Boolean => {
        return value !== "N/A";
    };

    return (
        <div>
            <h4 className="sub-heading mb-1">Ratings</h4>

            <div className="flex space-x-3">
                {Ratings?.map((rating) => {
                    return (
                        <div
                            className="flex flex-col border border-gray-200 rounded px-3 py-2"
                            key={rating.Source}
                        >
                            <span className="text-muted-x font-semibold tracking-wide">
                                {rating.Source}
                            </span>
                            <span className="text-blue-500 tracking-widest font-semibold">
                                {rating.Value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MovieRatings;
