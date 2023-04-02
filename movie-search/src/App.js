import React, { useState, useEffect } from "react";

import "./App.css";

const API_KEY = "8c990900";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies(query);
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
      <div>
        <div className="search-container">
          <input
              type="text"
              value={query}
              onChange={handleChange}
              className="search-input"
              placeholder="Search for movies..."
          />
        </div>
        <ul className="movies-list">
          {movies.map((movie) => (
              <li key={movie.imdbID} className="movie-item">
                {movie.Title}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default App;

