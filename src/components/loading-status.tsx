import Spinner from "../components/spinner";

type LoadingStatusProps = {
    text: string;
};

const LoadingStatus = ({ text }: LoadingStatusProps) => {
    return (
        <div className="flex flex-col items-center mt-5">
            <p className="mb-3 text-muted-x font-semibold">{text}</p>
            <Spinner />
        </div>
    );
};

export default LoadingStatus;
