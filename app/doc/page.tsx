"use client"

import { Tab } from "@headlessui/react"
import React, { useState } from "react"

import AdminDocs from "./admin-doc"
import ContentDocs from "./content-doc"
import GatewayDocs from "./gateway-docs"
import IdentityDocs from "./identity-doc"
import SnapMobileDocs from "./snap-mobile-doc"

const profileWidth = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"

export default function DocPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <main className="mx-auto max-w-7xl p-2  ">
      <Tab.Group defaultIndex={0} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="mt-6 sm:mt-2 2xl:mt-5">
          <div className="border-b border-gray-800">
            <div className={`${profileWidth} mt-10`}>
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <Tab.List>
                  <Tab key={"snap_docs_tab"}>
                    {({ selected }) => (
                      <div
                        className={
                          selected
                            ? `text-black-500 whitespace-nowrap border-b-2 bg-slate-300 px-5 py-3 font-mono text-sm font-medium`
                            : `whitespace-nowrap border-b-2 px-5 py-3 font-mono text-sm font-medium `
                        }
                        data-headlessui-state="selected"
                      >
                        Snap Mobile Docs
                      </div>
                    )}
                  </Tab>

                  <Tab key={"admin_docs_tab"}>
                    {({ selected }) => (
                      <div
                        className={
                          selected
                            ? `text-black-500 whitespace-nowrap border-b-2 bg-slate-300 px-5 py-3 font-mono text-sm font-medium`
                            : `whitespace-nowrap border-b-2 px-5 py-3 font-mono text-sm font-medium`
                        }
                        data-headlessui-state="selected"
                      >
                        Admin Docs
                      </div>
                    )}
                  </Tab>

                  <Tab key={"identity_docs_tab"}>
                    {({ selected }) => (
                      <div
                        className={
                          selected
                            ? `text-black-500 whitespace-nowrap border-b-2 bg-slate-300 px-5 py-3 font-mono text-sm font-medium`
                            : `whitespace-nowrap border-b-2 px-5 py-3 font-mono text-sm font-medium`
                        }
                        data-headlessui-state="selected"
                      >
                        Identity Docs
                      </div>
                    )}
                  </Tab>

                  <Tab key={"content_docs_tab"}>
                    {({ selected }) => (
                      <div
                        className={
                          selected
                            ? `text-black-500 whitespace-nowrap border-b-2 bg-slate-300 px-5 py-3 font-mono text-sm font-medium`
                            : `whitespace-nowrap border-b-2 px-5 py-3 font-mono text-sm font-medium`
                        }
                        data-headlessui-state="selected"
                      >
                        Content Docs
                      </div>
                    )}
                  </Tab>

                  <Tab key={"gateway_docs_tab"}>
                    {({ selected }) => (
                      <div
                        className={
                          selected
                            ? `text-black-500 whitespace-nowrap border-b-2 bg-slate-300 px-5 py-3 font-mono text-sm font-medium`
                            : `whitespace-nowrap border-b-2 px-5 py-3 font-mono text-sm font-medium`
                        }
                        data-headlessui-state="selected"
                      >
                        Gateway Docs
                      </div>
                    )}
                  </Tab>
                </Tab.List>
              </nav>
            </div>
          </div>

          <Tab.Panels>
            <Tab.Panel>
              <SnapMobileDocs />
            </Tab.Panel>

            <Tab.Panel>
              <AdminDocs />
            </Tab.Panel>

            <Tab.Panel>
              <IdentityDocs />
            </Tab.Panel>

            <Tab.Panel>
              <ContentDocs />
            </Tab.Panel>

            <Tab.Panel>
              <GatewayDocs />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </main>
  )
}
