import { useState, FormEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

type SearchBarProps = {
    placeholder: string;
    onSubmit: (query: string) => void;
};

const SearchBar = ({ placeholder, onSubmit }: SearchBarProps) => {
    // Although this component is only used once in this app,
    // I have made it reusable by taking placeholder and onSubmit as props

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const queryField = register("query", { required: true });

    const [isFocused, setIsFocused] = useState(false); // cannot use focus: selector because we need styling on the outer div when the input is focused

    const handleFormSubmit = (query: string) => {
        const trimmedQuery = query.trim();

        if (trimmedQuery) {
            onSubmit(trimmedQuery);
        }
    };

    return (
        <form onSubmit={handleSubmit((data) => handleFormSubmit(data.query))}>
            <div
                className={`flex items-center border rounded-full py-2 w-[275px] px-2 bg-gray-50 ${
                    isFocused ? "border-blue-400" : "border-gray-300"
                } transition-border duration-200`}
            >
                <MagnifyingGlassIcon
                    className={`icon mr-2 text-gray-500 transition-text duration-200`}
                />
                <input
                    {...queryField}
                    type="text"
                    placeholder={placeholder}
                    onFocus={(event) => setIsFocused(true)}
                    onBlur={(event) => setIsFocused(false)}
                    className="flex-1 outline-none mr-2 bg-transparent"
                />
            </div>
        </form>
    );
};

export default SearchBar;
