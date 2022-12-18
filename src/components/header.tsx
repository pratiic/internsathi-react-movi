import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setQuery } from "../redux/slices/search-slice";

import SearchBar from "./search-bar";
import Logo from "./logo";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = async (query: string) => {
        navigate(`/search/${query}`);
    };

    return (
        <header className="pt-5">
            <nav className="flex items-center justify-between wrapper">
                {/* application logo */}
                {/* <Link
                    to="/"
                    className="text-blue-500 text-3xl font-semibold tracking-widest"
                >
                    Movi
                </Link> */}
                <Logo />

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
