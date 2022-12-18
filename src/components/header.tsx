import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setQuery } from "../redux/slices/search-slice";

import SearchBar from "./search-bar";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = async (query: string) => {
        navigate(`/search/${query}`);
    };

    return (
        <header className="border-b border-gray-100 py-3">
            <nav className="flex items-center justify-between wrapper">
                {/* application logo */}
                <Link
                    to="/"
                    className="text-gray-700 text-2xl font-semibold tracking-widest"
                >
                    Movi
                </Link>

                {/* search bar */}
                <SearchBar
                    placeholder="Search for movies..."
                    onSubmit={handleSearch}
                />
            </nav>
        </header>
    );
};

export default Header;
