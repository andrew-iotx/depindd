import Header from "@/app/(docs)/(components)/Header"
import { Hero } from "@/app/(docs)/(components)/Hero"
import { Navigation } from "@/app/(docs)/(components)/Navigation"
import { getSidebarItems } from "@/app/(docs)/(utils)/sidebar"

export default async function DocsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const sidebar = await getSidebarItems()

  return (
    <body className="bg-white dark:bg-slate-900">
      <Header sidebar={sidebar} />

      <Hero />

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
            <Navigation
              sidebar={sidebar}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>

        {children}
      </div>
    </body>
  )
}
