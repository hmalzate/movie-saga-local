import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function TVShowList() {
  const [items, setItems] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

  useEffect(() => {
    fetch(`${backendUrl}/movies?type=tvshow`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setItems(data.data);
        } else {
          setItems([]);
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => console.error('Error fetching the TV show data:', error));
  }, [backendUrl]);

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
