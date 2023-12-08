import { ADMIN_FEATURES } from "features-admin"

export default function Admin() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src="/assets/images/web-view.png" alt="Your Image" className="h-auto max-w-full " />
      </div>
      <p className="py-5 text-center">Manage all your users with admin account</p>

      <h1 className="py-10 text-center text-4xl font-bold dark:text-white">
        <u>Admin Features</u>
      </h1>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {ADMIN_FEATURES.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
