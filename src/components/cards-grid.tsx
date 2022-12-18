import MovieCard from "./movie-card";

type CardsGridProps = {
    list: any;
};

const CardsGrid = ({ list }: CardsGridProps) => {
    return (
        <section className="grid grid-cols-list gap-7">
            {list.map((ele: any) => {
                return <MovieCard {...ele} key={ele.imdbID} />;
            })}
        </section>
    );
};

export default CardsGrid;
