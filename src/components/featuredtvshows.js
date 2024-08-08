import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllTVShows } from '../services/movieService'; // Import the service function
import '../App.css';

function FeaturedTVShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchAllTVShows()
      .then(setShows)
      .catch(error => console.error('Error fetching the TV show data:', error));
  }, []);

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h2>Featured TV Shows</h2>
        <div className="view-all">
          <Link to="/tvshows">View All</Link>
        </div>
      </div>
      <div className="featured-grid">
        {shows.map((show) => (
          <div key={show.id} className="featured-item">
            <Link to={`/movie/${show.id}`}>
              <div className="category-tag">{show.category}</div>
              <img src={show.poster} alt={show.title} />
              <h3>{show.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedTVShows;
