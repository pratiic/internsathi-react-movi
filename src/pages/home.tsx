import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Movi | Search for any movies you want";
    }, []);

    return (
        <section className="relative">
            {/* <img
                src="/images/theatre.jpg"
                className="absolute left-0 top-0 image h-full w-full"
                alt=""
            /> */}

            <div className="wrapper relative z-20 mt-[25px] text-muted">
                <h1 className="text-2xl tracking-widest mb-3 font-semibold">
                    Welcome to <span className="highlight">Movi</span>
                </h1>

                <div className="text-lg max-w-[700px] leading-tight space-y-5 tracking-wide">
                    <div className="space-y-2">
                        <p>
                            <span className="highlight">Movi</span> allows you
                            to search for movies and view their details.
                        </p>

                        <p>
                            It provides information including release date,
                            director and writer, box office performace, awards,
                            run time and so on.
                        </p>

                        <p>
                            Once you click a displayed movie, you will also be
                            able to view ratings from various sources as well as
                            actors who worked in the movie.
                        </p>

                        <p>
                            <span className="highlight">Movi</span> makes use of
                            the free <span className="highlight">OMDb</span> Api
                            to search movies and get details about the movies.
                        </p>

                        <p>
                            To get started, enter the name of your favorite
                            movie in the search bar at the top right corner,
                            press enter and enjoy ! 😉
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
