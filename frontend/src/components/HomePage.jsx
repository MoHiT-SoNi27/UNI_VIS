import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">Welcome to UNICODE</h1>
      <h2 className='font-semibold text-3xl'>A Sorting Visualizer</h2>
      <p className='w-[30%] mt-5 text-center'>UNICODE Visualizer is an interactive online platform that visualizes algorithms from code. Currently these include Sorting. More Algorithms will be coming soon!!</p>
    </div>
  );
};

export default HomePage;
