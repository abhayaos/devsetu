import { Link } from "react-router-dom";

export default function SetuLabs() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold">SetuLabs</h1>
      <p className="text-gray-600 mt-2">
        Building developer tools and platforms.
      </p>

      <div className="mt-6">
        <Link
          to="/setulabs/repos"
          className="bg-black text-white px-4 py-2 rounded"
        >
          View Repositories
        </Link>
      </div>

    </div>
  );
}