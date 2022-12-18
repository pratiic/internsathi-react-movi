import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Search from "./pages/search";
import MovieDetails from "./pages/movie-details";
import Home from "./pages/home";

function App() {
    return (
        <BrowserRouter>
            <main className="min-h-screen">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

                <section className="wrapper pt-3 pb-7">
                    <Routes>
                        <Route path="/search">
                            <Route path=":query" element={<Search />} />
                        </Route>

                        <Route path="/movies">
                            <Route path=":imdbID" element={<MovieDetails />} />
                        </Route>
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
