import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
