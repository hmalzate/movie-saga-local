import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllTVShows } from '../services/movieService';
import '../App.css';

function TVShowList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllTVShows()
      .then(setItems)
      .catch(error => console.error('Error fetching the TV show data:', error));
  }, []);

  return (
    <div className="tvshow-list">
      <h2>TV Shows</h2>
      <div className="grid">
        {items.map(item => (
          <div key={item.id} className="tvshow-item">
            <Link to={`/movie/${item.id}`}>
              <img src={item.poster} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TVShowList;
