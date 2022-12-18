type ActorsContainerProps = {
    actors: string;
};

const ActorsContainer = ({ actors }: ActorsContainerProps) => {
    const handleActorClick = (actor: string) => {
        // navigate to a google search of the actor

        window.open(`https://www.google.com/search?q=${actor}`);
    };

    return (
        <div>
            <h4 className="sub-heading mb-1">Actors</h4>

            <div className="flex flex-wrap gap-3">
                {actors === "N/A" ? (
                    <span className="text-muted">N/A</span>
                ) : (
                    actors?.split(", ").map((actor) => {
                        return (
                            <div
                                className="border-adaptive w-fit px-3 py-2 rounded text-muted cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-100 dark:hover:border-gray-700 hover:text-blue-500 active:bg-gray-200 dark:active:bg-gray-800 active:border-gray-200 dark:active:border-gray-800 transition-all duration-200"
                                key={actor}
                                onClick={() => handleActorClick(actor)}
                            >
                                {actor}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ActorsContainer;
