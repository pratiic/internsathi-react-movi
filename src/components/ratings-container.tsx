type Rating = {
    Source: string;
    Value: string;
};

type RatingsContainerProps = {
    Ratings: Rating[];
};

const RatingsContainer = ({ Ratings }: RatingsContainerProps) => {
    return (
        <div>
            <h4 className="sub-heading mb-1">Ratings</h4>

            <div className="flex flex-wrap gap-3">
                {Ratings?.length === 0 ? (
                    <span className="text-muted">N/A</span>
                ) : (
                    Ratings?.map((rating) => {
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
                    })
                )}
            </div>
        </div>
    );
};

export default RatingsContainer;
