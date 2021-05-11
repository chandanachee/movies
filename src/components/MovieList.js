import { AirlineSeatIndividualSuiteSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";

const MovieList = (props) => {
  const { movies } = props;
  const [moviesToRender, setMoviesToRender] = useState(movies);
  const [showSynopsis, setShowSynopsis] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  console.log(movies);

  const handlePosterClick = (e, movie) => {
    setId(movie.id);
    setShowSynopsis(true);
  };

  console.log("moviesToRender", moviesToRender)

  return (
    <>
      {moviesToRender &&
        moviesToRender.map((movie, index) => (
          <div
            key={index}
            className="image-container d-flex justify-content-start m-3"
          >
            <img
              src={movie.imageUrl}
              alt="movie"
              onClick={(e) => handlePosterClick(e, movie)}
            ></img>
            {showSynopsis && movie.id === id && <MovieCards movie={movie} />}
          </div>
        ))}
    </>
  );
};

export default MovieList;
