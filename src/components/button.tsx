import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
    return (
        <button
            className="border border-gray-300 px-5 py-[7px] rounded-full text-muted-x capitalize hover:bg-gray-100 hover:border-gray-100 active:bg-gray-200 active:border-gray-200 hover:text-muted active:text-muted-x transition-all duration-200"
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
