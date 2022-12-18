import MovieCard from "./movie-card";

type CardsGridProps = {
    list: any;
};

const CardsGrid = ({ list }: CardsGridProps) => {
    return (
        <section className="grid grid-cols-list-smallest 500:grid-cols-list-smaller 750:grid-cols-list gap-3 550:gap-5 1000:gap-7">
            {list.map((ele: any) => {
                return <MovieCard {...ele} key={ele.imdbID} />;
            })}
        </section>
    );
};

export default CardsGrid;
