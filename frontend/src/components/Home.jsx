import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <div>
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
