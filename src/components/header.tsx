import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SearchBar from "./search-bar";
import Logo from "./logo";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const navigate = useNavigate();

    const handleSearch = async (query: string) => {
        navigate(`/search/${query}`);
    };

    return (
        <header className="pt-3 500:pt-5">
            <nav className="flex flex-col gap-3 justify-between wrapper 500:flex-row 500:items-center 500:gap-0">
                {/* application logo */}
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
