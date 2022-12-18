import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Search from "./pages/search";
import MovieDetails from "./pages/movie-details";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Header />

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
