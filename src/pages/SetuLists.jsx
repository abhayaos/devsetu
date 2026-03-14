import { Link } from "react-router-dom"
import { FaBook } from "react-icons/fa"

export default function RepoList() {

  const repos = [
    "portfolio-site",
    "react-dashboard",
    "node-api"
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Setulabs Repositories
        </h1>

        <div className="bg-white border border-gray-200 rounded-lg divide-y">

          {repos.map((repo, i) => (
            <Link
              key={i}
              to={`/setulabs/setu${i + 1}`}
              className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition"
            >
              <FaBook className="text-gray-400" />
              <span className="text-gray-800 font-medium text-lg">{repo}</span>
            </Link>
          ))}

        </div>

      </div>
    </div>
  )
}