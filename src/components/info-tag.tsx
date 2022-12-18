type InfoTagProps = {
    title: string;
    value: string;
};

const InfoTag = ({ title, value }: InfoTagProps) => {
    return (
        <div className="w-fit rounded text-muted border-b border-gray-200 py-1 px-2">
            <span className="mr-3 text-sm">{title}</span>
            <span
                className={`font-semibold ${
                    value === "N/A" ? "text-gray-500 text-sm" : "text-blue-400"
                }`}
            >
                {value}
            </span>
        </div>
    );
};

export default InfoTag;
