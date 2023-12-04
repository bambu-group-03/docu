import React from "react"

export default function SnapMobileDocs() {
  return (
    <div className="py-10 text-justify">
      <h1 className="text-xl">
        <u>Getting Started</u>
      </h1>

      <section className="py-5">
        <div>
          <ol className="list-decimal">
            <li className="mb-2">
              Go to the{" "}
              <a href="https://github.com/bambu-group-03/snap" className="cursor-pointer text-blue-500 underline">
                Snap Mobile Repository
              </a>{" "}
              and clone/fork the project.
            </li>

            <li className="mb-2">
              Install the{" "}
              <a href="https://nodejs.org/en/blog/release/v18.18.1" className="cursor-pointer text-blue-500 underline">
                Node 18+
              </a>{" "}
              and{" "}
              <a href="https://www.npmjs.com/" className="cursor-pointer text-blue-500 underline">
                npm
              </a>{" "}
            </li>

            <li className="mb-2">
              Install the dependencies with <code className="rounded bg-gray-200 dark:bg-gray-800">npm install</code>{" "}
              inside of the <code className="rounded bg-gray-200 dark:bg-gray-800"> next-app</code> folder
            </li>
          </ol>
        </div>

        <div className="py-5">
          <h2 className="py-5 text-xl">
            <u>Running the project</u>
          </h2>
          <ol className="list-decimal">
            <li className="mb-2">
              Run the project with <code className="rounded bg-gray-200 dark:bg-gray-800">npm run dev</code> inside of
              the <code className="rounded bg-gray-200 dark:bg-gray-800"> next-app</code> folder
            </li>
            <li className="mb-2">
              Go to{" "}
              <a href="http://localhost:3000" className="cursor-pointer text-blue-500 underline">
                http://localhost:3000
              </a>{" "}
              and you will see the project running
            </li>
          </ol>
        </div>

        <div className="py-5">
          <h2 className="py-5 text-xl">
            <u>Running the project with docker</u>
          </h2>
          <ol className="list-decimal">
            <li className="mb-2">
              Run the project with{" "}
              <code className="rounded bg-gray-200 dark:bg-gray-800">
                docker compose -f deploy/docker-compose.dev.yml up --build
              </code>{" "}
              inside of the <code className="rounded bg-gray-200 dark:bg-gray-800"> next-app</code> folder
            </li>
            <li className="mb-2">
              Go to{" "}
              <a href="http://localhost:3000" className="cursor-pointer text-blue-500 underline">
                http://localhost:3000
              </a>{" "}
              and you will see the project running
            </li>
          </ol>
        </div>

        <div className="py-5">
          <h2 className="py-5 text-xl">
            <u>Github</u>
          </h2>
          <p>
            If you encounter any issue, please open an{" "}
            <a
              href="https://github.com/bambu-group-03/backoffice/issues"
              className="cursor-pointer text-blue-500 underline"
            >
              issue
            </a>{" "}
            in Github
          </p>
        </div>
      </section>
    </div>
  )
}
