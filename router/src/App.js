import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import AddMovie from "./Components/AddMovie/AddMovie";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./Components/Details/Details";
import { moviesData } from "./Components/DetailsPage/DetailsPage";

import React, { useState } from "react";

function App() {
    const [movies, setMovies] = useState(moviesData);
    const [searchRate, setSearchRate] = useState(0);
    const [searchTitle, setSearchTitle] = useState("");

    const getSearchRate = (input) => {
        setSearchRate(input);
    };

    const getSearchTitle = (input) => {
        setSearchTitle(input);
    };

    const getNewMovie = (newMovie) => {
        setMovies([...moviesData, newMovie]);
    };
    return (
        <BrowserRouter>
            <div>
                <MyNavBar
                    getSearchRate={getSearchRate}
                    getSearchTitle={getSearchTitle}
                />

                <Route exact path="/">
                    <div className="addMovieBtn">
                        <AddMovie getNewMovie={getNewMovie} />
                    </div>
                    <MovieList
                        movies={movies}
                        searchRate={searchRate}
                        searchTitle={searchTitle}
                    />
                </Route>
                <Route path="/detail/:movieid" component={Details} />
            </div>
        </BrowserRouter>
    );
}

export default App;
