import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Pages/login';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/another-page" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
