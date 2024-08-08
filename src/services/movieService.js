const BASE_URL = 'http://localhost:5001';

export const fetchAllMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies?type=movie`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data; 
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data; 
};

export const searchMoviesByTitle = async (title) => {
  const response = await fetch(`${BASE_URL}/movies/search?title=${title}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data; 
};

export const fetchAllTVShows = async () => {
  const response = await fetch(`${BASE_URL}/movies?type=tvshow`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data; 
};
