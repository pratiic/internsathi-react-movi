import { useNavigate } from "react-router-dom";

import SearchBar from "./search-bar";
import Logo from "./logo";
import ThemeToggler from "./theme-toggler";

const Header = () => {
    const navigate = useNavigate();

    const handleSearch = async (query: string) => {
        navigate(`/search/${query}`);
    };

    return (
        <header className="pt-3 600:pt-5">
            <nav className="flex flex-col gap-3 justify-between wrapper 600:flex-row 600:items-center 600:gap-0">
                <div className="flex items-center gap-7">
                    {/* application logo */}
                    <Logo />

                    {/* button to toggle the theme */}
                    <ThemeToggler />
                </div>

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
