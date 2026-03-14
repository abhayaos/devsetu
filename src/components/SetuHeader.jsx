export default function RepoHeader({ name }) {

  return (

    <div className="pb-4 border-b border-gray-200">

      <h1 className="text-2xl font-semibold text-gray-900">
        setulabs / <span className="text-blue-600">{name}</span>
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Public repository
      </p>

    </div>

  )

}