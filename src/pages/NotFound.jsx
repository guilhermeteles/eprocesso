// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-[#1F2937]">404 - Page Not Found</h1>
      <p className="text-gray-[#4B5563] mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
