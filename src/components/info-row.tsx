type InfoRowProps = {
    title: string;
    value: string;
};

const InfoRow = ({ title, value }: InfoRowProps) => {
    return (
        <div className="w-fit rounded text-muted border-b border-gray-200 py-1 px-2">
            <span className="mr-3 text-sm">{title}</span>
            <span
                className={`${
                    value === "N/A" ? "text-gray-500 text-sm" : "text-blue-500"
                }`}
            >
                {value}
            </span>
        </div>
    );
};

export default InfoRow;