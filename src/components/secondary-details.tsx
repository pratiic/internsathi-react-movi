import { getUnit } from "../lib/strings";

import InfoRow from "./info-row";

type SecondaryDetailsProps = {
    Director: string;
    Writer: string;
    BoxOffice: string;
    Runtime: string;
    Rated: string;
    DVD: string;
    Awards: string;
    Language: string;
};

const SecondaryDetails = ({
    Director,
    Writer,
    BoxOffice,
    Runtime,
    Rated,
    DVD,
    Awards,
    Language,
}: SecondaryDetailsProps) => {
    const modifyRuntime = (runtime: number) => {
        // runtime -> min
        // result -> hr, min
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        let result = `${minutes} ${getUnit(minutes, "minute", "minutes")}`;

        if (hours > 0) {
            result = `${hours} ${getUnit(hours, "hr", "hrs")}, ` + result;
        }

        return result;
    };

    return (
        <div>
            {/* movie director */}
            <InfoRow title="Director" value={Director} />
            {/* movie writer */}
            <InfoRow title="Writer" value={Writer} />
            {/* box office earnings */}
            <InfoRow title="Box office" value={BoxOffice} />
            {/* run time of the movie */}
            <InfoRow
                title="Run time"
                value={modifyRuntime(parseInt(Runtime))}
            />
            {/* rated eg, pg-13, r-rated */}
            <InfoRow title="Rated" value={Rated} />
            {/* dvd release date */}
            <InfoRow title="DVD release" value={DVD} />
            {/* awards */}
            <InfoRow title="Awards" value={Awards} />
            {/* movie language */}
            <InfoRow title="Language" value={Language} />
        </div>
    );
};

export default SecondaryDetails;
