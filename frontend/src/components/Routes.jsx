import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Platforms from './components/Platforms';
import Compete from './components/Compete';
import Job from './components/Job';
import Blog from './components/Blog';
import Report from './components/Report';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/compete" element={<Compete />} />
        <Route path="/job" element={<Job />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
