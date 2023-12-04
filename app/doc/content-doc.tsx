import React from "react"

export default function ContentDocs() {
  return (
    <div className="py-10 text-justify">
      <p>
        Content Discovery is encharged of managing all snap data. You can check all the endpoints{" "}
        <a
          href="https://api-content-discovery-luiscusihuaman.cloud.okteto.net/api/docs#/"
          className="cursor-pointer text-blue-500 underline"
        >
          here
        </a>
      </p>

      <h1 className="py-5 text-xl">
        <u>Getting Started</u>
      </h1>

      <section className="py-5">
        <div>
          <ol className="list-decimal">
            <li className="mb-2">
              Go to the{" "}
              <a
                href="https://github.com/bambu-group-03/content_discovery"
                className="cursor-pointer text-blue-500 underline"
              >
                Content Discovery Repository
              </a>{" "}
              and clone/fork the project
            </li>

            <li className="mb-2">
              Install the{" "}
              <a href="https://python-poetry.org/docs/" className="cursor-pointer text-blue-500 underline">
                Python Poetry
              </a>
            </li>

            <li className="mb-2">
              Install the dependencies with <code className="rounded bg-gray-200 dark:bg-gray-800">poetry install</code>{" "}
              from the root folder
            </li>
          </ol>
        </div>

        <div className="py-5">
          <h2 className="py-5 text-xl">
            <u>Running the project</u>
          </h2>
          <p></p>
          <ol className="list-decimal">
            <li className="mb-2">
              Run the project with{" "}
              <code className="rounded bg-gray-200 dark:bg-gray-800">poetry run python -m content_discovery</code> from
              the root folder.
            </li>
            <li>This will start the server on the configured host.</li>
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
                docker compose -f deploy/docker-compose.yml --project-directory . up --build
              </code>
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
              href="https://github.com/bambu-group-03/content_discovery/issues"
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
