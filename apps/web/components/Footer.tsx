"use client";

import Image from "next/image";
import Layout from "./Layout";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import clsx from "clsx";
import { HiOutlineDesktopComputer } from "react-icons/hi";

export default () => {
  const { theme, setTheme } = useTheme();

  return (
    <Layout top>
      <footer className="flex items-center justify-between px-4 py-6">
        <div>
          <span className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
            Crafted by{" "}
            <a
              href="https://harshsingh.xyz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-full py-0.5 pl-1 pr-2 text-neutral-950 transition-all hover:bg-neutral-300/50 active:scale-[.98] dark:hover:bg-neutral-800"
            >
              <Image
                src="/headshot.webp"
                width={20}
                height={20}
                alt="My face"
                className="mr-0.5 rounded-full border border-neutral-600"
                draggable={false}
              />
              Harsh Singh
            </a>
          </span>
        </div>
        <div>
          <div className="flex items-center gap-x-1 rounded-full border border-neutral-300 p-1 dark:border-neutral-800">
            <button
              className={clsx(
                "rounded-full p-1 transition-colors",
                theme === "system"
                  ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                  : "bg-none text-neutral-500 dark:text-neutral-500",
              )}
              onClick={() => setTheme("system")}
            >
              <HiOutlineDesktopComputer />
            </button>
            <button
              className={clsx(
                "rounded-full p-1 text-neutral-900 transition-colors dark:text-neutral-100",
                theme === "light"
                  ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                  : "bg-none text-neutral-500 dark:text-neutral-500",
              )}
              onClick={() => setTheme("light")}
            >
              <FiSun />
            </button>
            <button
              className={clsx(
                "rounded-full p-1 text-neutral-900 transition-colors dark:text-neutral-100",
                theme === "dark"
                  ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                  : "bg-none !text-neutral-500",
              )}
              onClick={() => setTheme("dark")}
            >
              <FiMoon />
            </button>
          </div>
        </div>
      </footer>
    </Layout>
  );
};
