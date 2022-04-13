import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

export default function UserList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    //parcours le tableau des données dans le storage et envoi l'id dans l'url de son index
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=583a93ce4dd56c8af08dcfe52409369f&language=fr-FR&external_source=imdb_id`
        )
        .then((response) => {
          setListData((listData) => [...listData, response.data]); //casse la liste du tableau en y ajoutant des valeurs
        });
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>

      {/**
       * Affiche le composant Card
       * On récupère le props movie de card
       * On lui indique une key (id)
       * On regarde si une liste existe(length > 0) sinon on indique un message dans un <h2>
       */}
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment...</h2>
        )}
      </div>
    </div>
  );
}
