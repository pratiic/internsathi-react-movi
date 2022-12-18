import { getUnit } from "../lib/strings";

import InfoTag from "./info-tag";

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
    Writer,
    Director,
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
            <InfoTag title="Director" value={Director} />
            {/* movie writer */}
            <InfoTag title="Writer" value={Writer} />
            {/* box office earnings */}
            <InfoTag title="Box office" value={BoxOffice} />
            {/* run time of the movie */}
            <InfoTag
                title="Run time"
                value={modifyRuntime(parseInt(Runtime))}
            />
            {/* rated eg, pg-13, r-rated */}
            <InfoTag title="Rated" value={Rated} />
            {/* dvd release date */}
            <InfoTag title="DVD release" value={DVD} />
            {/* awards */}
            <InfoTag title="Awards" value={Awards} />
            {/* movie language */}
            <InfoTag title="Language" value={Language} />
        </div>
    );
};

export default SecondaryDetails;
