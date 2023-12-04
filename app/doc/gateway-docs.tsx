import React from "react"

export default function GatewayDocs() {
  return (
    <div className="py-10 text-justify">
      <p>Gateway is encharged of redirecting every request to the appropriate microserver.</p>

      <h1 className="py-5 text-xl">
        <u>Getting Started</u>
      </h1>

      <section className="py-5">
        <div>
          <ol className="list-decimal">
            <li className="mb-2">
              Go to the{" "}
              <a href="https://github.com/bambu-group-03/apigw" className="cursor-pointer text-blue-500 underline">
                Gateway Repository
              </a>{" "}
              and clone/fork the project
            </li>

            <li className="mb-2">
              Install the{" "}
              <a href="https://go.dev/doc/install" className="cursor-pointer text-blue-500 underline">
                GO
              </a>
            </li>

            <li>
              Copy the local variables with{" "}
              <code className="rounded bg-gray-200 dark:bg-gray-800">cp .env.example .env</code>
            </li>

            <li className="mb-2">
              Install Dependancies Globally <code className="rounded bg-gray-200 dark:bg-gray-800">make bin-deps</code>
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
              Run the project with <code className="rounded bg-gray-200 dark:bg-gray-800">make run</code> from the root
              folder
            </li>
          </ol>
        </div>

        <div className="py-5">
          <h2 className="py-5 text-xl">
            <u>Github</u>
          </h2>
          <p>
            If you encounter any issue, please open an{" "}
            <a href="https://github.com/bambu-group-03/apigw/issues" className="cursor-pointer text-blue-500 underline">
              issue
            </a>{" "}
            in Github
          </p>
        </div>
      </section>
    </div>
  )
}
