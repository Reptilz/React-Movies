import React from "react";

export default function Card({ movie }) {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  //Store l'id d'un film pour le garder au refresh de la page
  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",") // si le storage existe alors split du tableau à chaque ","
      : []; //sinon, si le storage n'existe pas, crée un tableau vide

    //si l'id existe déjà alors on ne l'ajoute pas dans le tableau
    //si l'id n'existe pas alors on l'ajoute au tableau
    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  return (
    //Cards
    <div className="card">
      {/*Image*/}
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={movie.original_title}
      />
      {/*Titre*/}
      <h2>{movie.title}</h2>
      {/*Date formatée*/}
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : (
        ""
      )}
      {/*Note sur 10*/}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      {/*Les genres*/}
      <ul>
        {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre) => {
              <li>{genre.name}</li>;
            })}
      </ul>
      {/*Synopsis*/}
      {movie.overview ? <h3>Synopsis :</h3> : ""}
      <p>{movie.overview}</p>

      {/*Btn ajouter coup de coeur*/}
      <div className="btn" onClick={() => addStorage()}>
        Ajouter coup de coeur
      </div>
    </div>
  );
}
