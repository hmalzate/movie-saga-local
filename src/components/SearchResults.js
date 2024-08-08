import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get('query');
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      fetch(`http://localhost:5001/movies/search?title=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          setResults(data.data); // Ensure this matches the structure of your response
        })
        .catch(error => {
          console.error('Error fetching the search results:', error);
          setError('Error fetching search results');
        });
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery && results.length > 0) {
      const filtered = results.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [searchQuery, results]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="search-results">
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="grid">
        {filteredResults.map(item => (
          <div key={item.id} className="movie-item">
            <Link to={`/movie/${item.id}`}>
              <img src={item.poster} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
