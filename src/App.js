import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import MovieList from './pages/movielist';
import MovieDetail from './pages/moviedetail';
import Registration from './components/registration';
import Login from './components/login';
import ContentSection1 from './components/ContentSection1';
import ContentSection2 from './components/ContentSection2';
import Hero from './components/Hero';
import SearchResults from './components/SearchResults';
import TVShowList from './pages/tvshowlist'; // Added import
import Dashboard from './pages/Dashboard'; // Added import
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/tvshows" element={<TVShowList />} /> {/* Added route */}
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Added route */}
        </Routes>
        <div className="content-section">
          <ContentSection1 />
          <ContentSection2 />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
