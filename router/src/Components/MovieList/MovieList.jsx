import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList({ movies, searchRate, searchTitle }) {
    return (
        <div className="movieList">
            {movies
                .filter(
                    (movie) =>
                        movie.rate >= searchRate &&
                        movie.title
                            .toLowerCase()
                            .includes(searchTitle.toLowerCase())
                )
                .map((element, index) => (
                    <MovieCard movie={element} key={index} />
                ))}
        </div>
    );
}

export default MovieList;
