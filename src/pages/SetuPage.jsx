import { useParams } from "react-router-dom";
import { repos } from "../data/repos";

export default function RepoPage() {

  const { repo } = useParams();

  const data = repos.find((r) => r.name === repo);

  if (!data) {
    return <div className="p-8">Repository not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-2xl font-bold">
        setulabs / {data.name}
      </h1>

      <p className="text-gray-600 mt-3">
        {data.description}
      </p>

      <div className="mt-4 text-sm text-gray-500">
        Language: {data.language}
      </div>

      <div className="mt-2 text-sm text-gray-500">
        Stars: ⭐ {data.stars}
      </div>

      <div className="mt-8 border-t pt-4">
        <p className="text-gray-500">
          README coming soon...
        </p>
      </div>

    </div>
  );
}