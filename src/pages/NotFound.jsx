import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-6">

      <div className="text-center max-w-xl">

        <h1 className="text-7xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          Page not found
        </h2>

        <p className="text-gray-600 mt-4">
          The page you are looking for does not exist or may have been moved.
          Check the URL or return to the homepage.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link
            to="/"
            className="px-6 py-3 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition"
          >
            Go Home
          </Link>

          <Link
            to="/explore"
            className="px-6 py-3 border rounded-md hover:bg-gray-100 transition"
          >
            Explore Projects
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFound;