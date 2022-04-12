import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Form() {
  const [moviesData, setMoviesData] = useState([]);

  //valeur de l'input qu'on récupère
  const [search, setSearch] = useState("harry ");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=583a93ce4dd56c8af08dcfe52409369f&query=${search}l&language=fr-FR`
      )
      .then((resp) => setMoviesData(resp.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Rechercher un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>⇾</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>⇾</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.slice(0, 12).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
