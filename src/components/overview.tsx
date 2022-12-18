import { useState } from "react";

type OverviewProps = {
    overview: string;
};

const Overview = ({ overview }: OverviewProps) => {
    const [showAll, setShowAll] = useState(false);

    const MAX_LEN = 70;

    const renderOverview = (): string => {
        const overviewArr = overview?.split(" ") || [];

        return overviewArr
            .slice(0, showAll ? overviewArr.length : MAX_LEN)
            .join(" ");
    };

    const handleShowMoreClick = () => {
        setShowAll(true);
    };

    return (
        <div className="mb-2">
            {/* show a show more button if the overview is too long */}
            <h3 className="black-white">Overview</h3>

            <p className="text-muted max-w-[500px]">
                {renderOverview()}

                {overview?.split(" ").length > MAX_LEN && !showAll && (
                    <span>
                        ...{" "}
                        <span
                            className="highlight cursor-pointer"
                            onClick={handleShowMoreClick}
                        >
                            show more
                        </span>
                    </span>
                )}
            </p>
        </div>
    );
};

export default Overview;
