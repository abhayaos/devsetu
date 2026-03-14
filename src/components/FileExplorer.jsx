import { useNavigate } from "react-router-dom"
import { FaFolder, FaFileCode } from "react-icons/fa"

export default function FileExplorer({ files }) {

  const navigate = useNavigate()

  return (
    <div>

      {files.map((file, i) => {

        const Icon = file.type === "folder" ? FaFolder : FaFileCode

        return (
          <div
            key={i}
            onClick={() => {
              if (file.type === "file") {
                navigate("/code", { state: file })
              }
            }}
            className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
          >

            <Icon className="text-gray-500" />

            <span className="text-sm text-gray-800">{file.name}</span>

          </div>
        )

      })}

    </div>
  )
}