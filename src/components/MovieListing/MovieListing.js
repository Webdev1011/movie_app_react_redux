import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  getLoadingStatus,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { Settings } from "../../common/settings";

const MovieListing = () => {
  const loading = useSelector(getLoadingStatus);
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-erros">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-erros">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {loading ? (
          <div className="loader">...Loading</div>
        ) : (
          <>
            <div className="movie-container">
              <Slider {...Settings}>{renderMovies}</Slider>
            </div>
          </>
        )}
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {loading ? (
          <div className="loader">...Loading</div>
        ) : (
          <>
            <div className="movie-container">
              <Slider {...Settings}>{renderShows}</Slider>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
