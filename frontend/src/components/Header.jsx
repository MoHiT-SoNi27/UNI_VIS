import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <header className="bg-gray-950 text-white">
      <div className="container  p-4 flex justify-between items-center">
        <div className="text-2xl font-bold"><Link to="/homepage" className="hover:text-orange-500">UNICODE</Link></div>
        <nav className="space-x-4">
          <Link to="/homepage" className="hover:text-orange-500">Home</Link>
          <Link to="/visualizer1" className="hover:text-orange-500">Visualizer</Link>
          {/* <Link to="/compete" className="hover:text-orange-500">Compete</Link>
          <Link to="/jobs" className="hover:text-orange-500">Jobs</Link> */}
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
          {token ? (
            <a href="/" onClick={handleLogout} className="hover:text-orange-500 mr-0">Logout</a>
          ) : (
            <a href="/" onClick={handleGetStarted} className="hover:text-orange-500 mr-0">Get Started</a>
          )}
        </nav>
        <div className="relative">
            <Link to="/profile" className="hover:text-orange-500">
              <i className="fas fa-user-circle text-2xl hover:text-orange-500"></i>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
