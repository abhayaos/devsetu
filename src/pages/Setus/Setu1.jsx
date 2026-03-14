import RepoHeader from "../../components/SetuHeader"
import FileExplorer from "../../components/FileExplorer"
import { FaBook } from "react-icons/fa"

export default function Repo1() {

  const files = [
    { type: "folder", name: "src" },

    {
      type: "file",
      name: "index.js",
      code: `console.log("Hello Setulabs")`
    },

    {
      type: "file",
      name: "server.js",
      code: `
import express from "express"

const app = express()

app.get("/",(req,res)=>{
res.send("API running")
})

app.listen(5000)
`
    }
  ]

  return (

    <div className="min-h-screen bg-gray-50">

      <div className="max-w-5xl mx-auto px-6 py-8">

        <RepoHeader name="portfolio-site" />

        {/* File Explorer */}
        <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
          <FileExplorer files={files} />
        </div>

        {/* README */}
        <div className="mt-6 bg-white border border-gray-200 rounded-lg">

          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 font-semibold text-gray-800">
            <FaBook className="text-gray-500" />
            README.abhaya
          </div>

          <div className="p-6 text-gray-700 space-y-4">

            <p>
              This repository contains a simple Node project for learning
              backend development.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Express server</li>
              <li>API example</li>
              <li>Learning repository</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  )
}