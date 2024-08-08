import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/movieService';
import '../App.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieById(id)
      .then(setMovie)
      .catch(error => {
        console.error('Error fetching movie or TV show:', error);
        setError('Error fetching movie or TV show');
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <img src={movie.poster} alt={movie.title} className="movie-detail-poster" />
        <div className="movie-detail-info">
          <h2>{movie.title}</h2>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Type:</strong> {movie.type}</p>
          <div className="movie-detail-actions">
            <button className="rent-button">Rent {movie.priceRent}</button>
            <button className="buy-button">Buy {movie.priceBuy}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
