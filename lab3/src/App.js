import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from "./views/Admin";
import Article from "./views/Article";
import Articles from "./views/Articles";
import Navbar from './components/Navbar';
import Logo from './components/Logo';

function App() {
  return (
    <div id="app">
      <div className="header-bg">
        <div className="header container">
          <Logo />
          <Navbar />
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to="/articles" />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:id' element={<Article />} />
          <Route path='*' element={<h2>404 den här sidan finns inte</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
