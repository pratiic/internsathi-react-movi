type SpinnerProps = {};

const Spinner = ({}: SpinnerProps) => {
    return (
        <div className="h-6 w-6 border-[3px] rounded-full border-t-transparent border-blue-500 animate-spin"></div>
    );
};

export default Spinner;
