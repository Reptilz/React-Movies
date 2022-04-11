import React from "react";

export default function Card({ movie }) {
  return (
    <div className="card">
      <h2>{movie.title}</h2>
    </div>
  );
}
