import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Panda.corp",
  description: "Panda.corp is an Corporation dedicated to making the world a better place.",
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Snap
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Find out what is happening in the world right now
            </p>
            <Button href="https://github.com/bambu-group-03/snap/releases/tag/v1.1.2" className="mr-3">
              Get Mobile Apk
            </Button>
            <Button href="https://next-app-identity-socializer-luiscusihuaman.cloud.okteto.net/" intent="secondary">
              Go to Admin Page
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
