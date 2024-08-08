import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllMovies } from '../services/movieService'; // Import the service function
import '../App.css';

function FeaturedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies()
      .then(setMovies)
      .catch(error => console.error('Error fetching the movie data:', error));
  }, []);

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h2>Featured Films</h2>
        <div className="view-all">
          <Link to="/movies">View All</Link>
        </div>
      </div>
      <div className="featured-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="featured-item">
            <Link to={`/movie/${movie.id}`}>
              <div className="category-tag">{movie.category}</div>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedMovies;
