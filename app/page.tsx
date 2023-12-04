import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { SNAP_FEATURES } from "snap-features"

export const metadata: Metadata = {
  title: "Panda.corp",
  description: "Panda.corp is an Corporation dedicated to making the world a better place.",
}

export default function Web() {
  return (
    <div className="h-screen items-center justify-center bg-white dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-8xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
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

        <section className="bg-white dark:bg-gray-900">
          <h2 className="px-20 text-4xl font-bold dark:text-white">
            <u>Features</u>
          </h2>
          <div className="mx-auto max-w-screen-xl px-4 py-5 sm:py-16 lg:px-6">
            <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {SNAP_FEATURES.map((singleItem) => (
                <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                    {singleItem.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 ">{singleItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
