import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <h1 className="text-5xl font-bold leading-tight max-w-3xl">
          A collaborative platform for Nepali developers
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Dev Setu provides infrastructure for developers in Nepal to host
          repositories, share code, collaborate on open-source projects, and
          build technical communities. The platform focuses on accessibility,
          simplicity, and developer-first tooling.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition"
          >
            Create Account
          </Link>

          <Link
            to="/explore"
            className="px-6 py-3 border rounded-md hover:bg-gray-100 transition"
          >
            Explore Projects
          </Link>
        </div>

      </section>


      {/* Platform Overview */}
      <section className="border-t border-b bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Repository Hosting
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Developers can create and manage repositories for projects,
              libraries, experiments, and educational resources. Version
              tracking and structured project organization allow teams to
              collaborate effectively.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold mb-3">
              Open Collaboration
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Dev Setu encourages collaborative development through
              contribution workflows, project discussions, and issue
              tracking. Teams and individuals can work together across
              universities, startups, and communities.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold mb-3">
              Developer Discovery
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Profiles and public repositories allow developers to showcase
              their work. Projects become discoverable to recruiters,
              collaborators, and open-source contributors.
            </p>
          </div>

        </div>

      </section>


      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold mb-14">
          How developers use Dev Setu
        </h2>

        <div className="grid md:grid-cols-2 gap-14">

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Student projects
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Computer science students use Dev Setu to publish class
              assignments, collaborate on semester projects, and build
              technical portfolios that demonstrate practical development
              experience.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">
              Startup development
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Early-stage startups host internal and open repositories,
              manage codebases, and collaborate with distributed teams
              across Nepal.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">
              Open-source initiatives
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Community maintainers can publish open-source tools,
              frameworks, and libraries designed specifically for Nepali
              developers and local technology ecosystems.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">
              Technical communities
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Developer communities can organize projects, share resources,
              and maintain collaborative repositories for educational and
              research purposes.
            </p>
          </div>

        </div>

      </section>


      {/* Closing Section */}
      <section className="border-t">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold max-w-2xl">
            Building a stronger developer ecosystem in Nepal
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            Dev Setu aims to reduce barriers to collaboration by providing
            a centralized platform for code hosting, project discovery,
            and technical knowledge sharing. By connecting developers,
            students, startups, and communities, the platform contributes
            to a more open and productive technology ecosystem.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;