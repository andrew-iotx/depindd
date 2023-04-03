import TableOfContents from "@/app/(docs)/(components)/TableOfContents"
import { Prose } from "@/app/(docs)/(components)/markdoc/Prose"
import {
  collectHeadings,
  getMarkdownContent,
  getMarkdownTitle,
} from "@/app/(docs)/(utils)/markdown"
import { components } from "@/app/(docs)/config.markdoc"
import Markdoc from "@markdoc/markdoc"
import { Metadata } from "next"
import path from "path"
import React from "react"
import RssFeed from "../../(components)/RssFeed"
import { projects } from "../../(data)/projects"
import { RssFeedConfig, getRssFeedConfigs } from "../../(utils)/rss"
import { PAGES_PATH } from "../../(utils)/sidebar"
import { capitalizeFirstLetter } from "../../(utils)/text"

type PageProps = {
  params: {
    section: string
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const projectInfo = projects.find(({ slug }) => slug === params.slug)
  const filePath = path.join(PAGES_PATH, params.section, params.slug + ".md")
  const title = getMarkdownTitle(filePath)
  return {
    title:
      params.section.replaceAll("-", " ") + " - " + title || projectInfo?.title,
  }
}

export default async function Page({ params }: PageProps) {
  const filePath = path.join(PAGES_PATH, params.section, params.slug + ".md")
  let { content, topContent } = getMarkdownContent(filePath)

  const tableOfContents = collectHeadings(content)

  let rssFeeds: RssFeedConfig[] = []

  if (params.section === "projects") {
    const projectInfo = projects.find(({ slug }) => slug === params.slug)
    if (projectInfo) {
      rssFeeds = await getRssFeedConfigs(projectInfo.links)
    }
  }

  return (
    <>
      {topContent && (
        <Prose className="px-4 lg:pl-8 lg:pr-0 xl:px-16">
          {Markdoc.renderers.react(topContent, React, {
            components,
          })}
          <hr className="mb-6 mt-3" />
        </Prose>
      )}

      <div className="flex">
        <div className="min-w-0 max-w-2xl flex-auto px-4 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            <Prose>
              {Markdoc.renderers.react(content, React, { components })}
            </Prose>
          </article>
        </div>
        {tableOfContents.length > 0 && (
          <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:pr-6">
            <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
              On this page
            </h5>
            <TableOfContents tableOfContents={tableOfContents} />
          </div>
        )}
      </div>

      {rssFeeds.length > 0 &&
        rssFeeds.map(({ type, sourceUrl, feedUrl }) => (
          <div
            key={sourceUrl}
            className="min-w-0 max-w-2xl flex-auto px-4 pb-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16"
          >
            <div className="mt-12 border-t border-slate-200 pt-12 dark:border-slate-800">
              <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
                On {capitalizeFirstLetter(type)}
              </h1>
              {/* @ts-expect-error Async Server Component */}
              <RssFeed type={type} feedUrl={feedUrl} />
            </div>
          </div>
        ))}
    </>
  )
}
