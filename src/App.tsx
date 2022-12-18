import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./contexts/theme-context";

import Header from "./components/header";
import Search from "./pages/search";
import MovieDetails from "./pages/movie-details";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
    const themeContext = useContext(ThemeContext);

    return (
        <BrowserRouter>
            <main className={themeContext?.theme === "dark" ? "dark" : ""}>
                <div className="dark:bg-gray-800 min-h-screen">
                    <Header />

                    <section className="wrapper pt-3 pb-7">
                        <Routes>
                            <Route path="/" element={<Home />} />

                            <Route path="/search/:query" element={<Search />} />

                            <Route
                                path="/movies/:imdbID"
                                element={<MovieDetails />}
                            />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </section>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
