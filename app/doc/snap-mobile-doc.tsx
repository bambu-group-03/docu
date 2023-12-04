import React from "react"

export default function SnapMobileDocs() {
  return (
    <div className="py-10 text-justify">
      <p>Snap Mobile is encharged of the end user mobile app.</p>

      <h1 className="py-5 text-xl">
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
              and clone/fork the project
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
              Install{" "}
              <a href="https://pnpm.io/installation" className="cursor-pointer text-blue-500 underline">
                pnpm
              </a>{" "}
              with <code className="rounded bg-gray-200 dark:bg-gray-800">npm install -g pnpm</code>
            </li>

            <li className="mb-2">
              Install the dependencies with <code className="rounded bg-gray-200 dark:bg-gray-800">pnpm install</code>{" "}
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
              Install{" "}
              <a href="https://expo.dev/expo-go" className="cursor-pointer text-blue-500 underline">
                Expo Go
              </a>{" "}
              on your device and enable all your device specific settings in order to load an app from external sources
            </li>
            <li className="mb-2">
              Run the project with <code className="rounded bg-gray-200 dark:bg-gray-800">pnpm android</code> from the
              root folder
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
                docker compose -f deploy/docker-compose.yml -f deploy/docker-compose.dev.yml --project-directory . up
                --build
              </code>{" "}
              from the root folder
            </li>
          </ol>
        </div>

        <div className="py-5">
          <h2 className="py-5 text-xl">
            <u>Github</u>
          </h2>
          <p>
            If you encounter any issue, please open an{" "}
            <a href="https://github.com/bambu-group-03/snap/issues" className="cursor-pointer text-blue-500 underline">
              issue
            </a>{" "}
            in Github
          </p>
        </div>
      </section>
    </div>
  )
}
