import { Link } from "react-router-dom";
import { GiClapperboard } from "react-icons/gi";

const Logo = () => {
    return (
        <Link
            to="/"
            className="flex items-center text-blue-500 text-3xl font-semibold tracking-widest"
        >
            Movi <GiClapperboard className="w-7 ml-2" />
        </Link>
    );
};

export default Logo;
