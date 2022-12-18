import { Link } from "react-router-dom";

type ActorsContainerProps = {
    actors: string;
};

const ActorsContainer = ({ actors }: ActorsContainerProps) => {
    return (
        <div>
            <h4 className="sub-heading mb-1">Actors</h4>

            <div className="flex flex-wrap gap-3">
                {actors === "N/A" ? (
                    <span className="text-muted">N/A</span>
                ) : (
                    actors?.split(", ").map((actor) => {
                        return (
                            // when an actor is clicked, we navigate to a google search of the actor

                            <Link
                                to={`http://www.google.com/${actor}`}
                                target="_blank"
                                className="border border-gray-200 w-fit px-3 py-2 rounded text-muted cursor-pointer hover:bg-gray-100 hover:border-gray-100 hover:text-blue-500 active:bg-gray-200 active:border-gray-200 transition-all duration-200"
                                key={actor}
                            >
                                {actor}
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ActorsContainer;
