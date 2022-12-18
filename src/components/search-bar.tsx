import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

type SearchBarProps = {
    placeholder: string;
    onSubmit: (query: string) => void;
};

const SearchBar = ({ placeholder, onSubmit }: SearchBarProps) => {
    // Although this component is only used once in this app,
    // I have made it reusable by taking placeholder and onSubmit as props

    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    // cannot use focus: selector because we need styling on the outer div when the input is focused

    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        const trimmedQuery = query.trim();

        if (trimmedQuery) {
            onSubmit(trimmedQuery);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    // const handleSearchIconClick = (event: FormEvent) => {
    //     // focus the search bar when the search icon is clicked
    //     inputRef.current?.focus();
    // };

    return (
        <form onSubmit={handleFormSubmit}>
            <div
                className={`flex items-center border rounded-full py-2 w-[275px] px-2 bg-gray-50 ${
                    isFocused ? "border-blue-400" : "border-gray-200"
                } transition-border duration-200`}
            >
                <MagnifyingGlassIcon
                    className={`icon mr-2 text-gray-500 transition-text duration-200`}
                    // onClick={handleSearchIconClick}
                />
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    onFocus={(event) => setIsFocused(true)}
                    onBlur={(event) => setIsFocused(false)}
                    className="flex-1 outline-none mr-2 bg-transparent"
                    // ref={inputRef}
                />
            </div>
        </form>
    );
};

export default SearchBar;
