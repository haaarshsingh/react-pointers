"use client";

import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiCheck, FiCopy } from "react-icons/fi";
import Layout from "./Layout";

export default () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 1000);
  }, [copied]);

  return (
    <Layout>
      <section className="mt-28 px-4">
        <span className="text-sm text-sky-500 dark:text-sky-500">
          React Pointers
        </span>
        <h1 className="my-1 text-3xl tracking-tight">
          Custom Cursors For React
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Fast, composable, lightweight and headless cursor component.
        </p>
        <div className="mt-6 flex items-center gap-x-2">
          <a
            href="https://github.com/harshhhdev/react-pointers"
            rel="noreferrer"
            target="_blank"
            className="flex h-[44px] items-center justify-center rounded-lg bg-neutral-950 px-3 text-sm text-neutral-50 transition-all hover:bg-neutral-800 active:scale-[.98] active:bg-neutral-700 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            <BsGithub className="mr-1.5 text-lg" />
            harshhhdev/react-pointers
          </a>
          <button
            className="group flex cursor-copy items-center rounded-full bg-neutral-200 p-1.5 text-sm transition-all hover:bg-neutral-300/75 active:scale-[.98] active:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700/75 dark:active:bg-neutral-700"
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText("npm i react-pointers");
            }}
          >
            <span className="px-2 text-neutral-950 dark:text-neutral-400">
              npm i react-pointers
            </span>
            <span className="rounded-full bg-neutral-300 p-2 text-base text-neutral-500 transition-colors group-hover:bg-neutral-400/25 group-active:bg-neutral-400/50 dark:bg-neutral-700/50 dark:text-neutral-400">
              {copied ? <FiCheck /> : <FiCopy />}
            </span>
          </button>
        </div>
      </section>
    </Layout>
  );
};
