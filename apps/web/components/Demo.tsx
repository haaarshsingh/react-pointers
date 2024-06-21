"use client";

import { FC, ReactNode, useRef, useState } from "react";
import clsx from "clsx";
import * as Select from "@radix-ui/react-select";
import { FiCheck, FiChevronDown, FiPlayCircle, FiZap } from "react-icons/fi";
import Layout from "./Layout";
import Grid from "./Grid";
import { TbFileCode, TbFileDownload, TbGitPullRequest } from "react-icons/tb";

enum Cursor {
  default = "default",
  pixel = "pixel",
  ring = "ring",
  mac = "mac",
}

const features = [
  {
    icon: <TbFileCode />,
    label: "Examples",
    description: "Check out the examples for implementations of this library.",
    link: {
      label: "View examples",
      href: "https://github.com/harshhhdev/react-pointers/tree/master/apps/examples",
    },
  },
  {
    icon: <TbGitPullRequest />,
    label: "Download",
    description: "Download the library from NPM—only around 6kB minified.",
    link: {
      label: "Download v1.0.0",
      href: "https://npmjs.com/package/react-pointers",
    },
  },
  {
    icon: <TbGitPullRequest />,
    label: "Contribute",
    description:
      "Submit bug reports, suggest an enhancement, or anything else.",
    link: {
      label: "View GitHub",
      href: "https://github.com/harshhhdev/react-pointers",
    },
  },
];

export default () => {
  const [cursor, setCursor] = useState<Cursor>(Cursor.default);

  /* NOTE: fix this jank ass shit */
  const tabs = [
    {
      label: "Default",
      onClick: () => setCursor(Cursor.default),
      clip: "inset(4px calc(100% - (3.5px + 69px)) calc(100% - (0px + 32px)) 3.5px round 20px)",
    },
    {
      label: "Pixel Art",
      onClick: () => setCursor(Cursor.pixel),
      clip: "inset(4px calc(100% - (72.5px + 76px)) calc(100% - (0px + 32px)) 72.5px round 20px)",
    },
    {
      label: "Animated Ring",
      onClick: () => setCursor(Cursor.ring),
      clip: "inset(4px calc(100% - (148.5px + 117px)) calc(100% - (0px + 32px)) 148.5px round 20px)",
    },
    {
      label: "macOS",
      onClick: () => setCursor(Cursor.mac),
      clip: "inset(4px calc(100% - (265.5px + 69px)) calc(100% - (0px + 32px)) 265.5px round 20px)",
    },
  ];

  return (
    <Layout>
      <section className="mb-36 mt-24 px-4">
        <div className="flex items-center justify-between">
          <Tabs tabs={tabs} />
          <CursorSelect />
        </div>
        <div className="mt-12 flex gap-x-3">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex items-center">
                {feature.icon}
                <span className="ml-1">{feature.label}</span>
              </div>
              <p className="mb-6 mt-2 text-sm text-neutral-600">
                {feature.description}
              </p>
              <a
                href={feature.link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-500"
              >
                {feature.link.label}
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

const SelectItem: FC<{ children: ReactNode; value: string }> = ({
  children,
  value,
}) => (
  <Select.Item
    value={value}
    className="flex h-[28px] cursor-pointer items-center rounded px-2 text-sm outline-none hover:bg-neutral-300/50 dark:hover:bg-neutral-700/50"
  >
    <Select.ItemIndicator className="mr-1">
      <FiCheck />
    </Select.ItemIndicator>
    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
);

const CursorSelect = () => {
  const [cursor, setCursor] = useState("auto");

  return (
    <Select.Root
      defaultValue="javascript"
      onValueChange={(e) => setCursor(e)}
      value={cursor}
    >
      <Select.Trigger
        className="inline-flex h-[28px] items-center justify-center gap-1 rounded-md border border-neutral-200 bg-neutral-100 px-3 text-sm leading-none outline-none transition-all hover:border-neutral-300 hover:bg-neutral-300/50 active:bg-neutral-300/70 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700/70"
        aria-label="Languages"
      >
        <Select.Value />
        <Select.Icon>
          <FiChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md border border-neutral-300 bg-neutral-50 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
          <Select.Viewport className="p-1">
            <Select.Group>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="move">Move</SelectItem>
              <SelectItem value="resize">NS Resize</SelectItem>
              <SelectItem value="loading">Loading</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

type Props = {
  tabs: {
    label: string;
    onClick: () => void;
    clip: string;
  }[];
};

const Tabs: FC<Props> = ({ tabs }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onSelectTab = (i: number) => {
    if (ref.current) {
      const keyframes = [
        { clipPath: tabs[active]?.clip },
        { clipPath: tabs[i]?.clip },
      ];

      const options: KeyframeAnimationOptions = {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      };

      ref.current.animate(keyframes, options);
    }

    setActive(i);
  };

  return (
    <div className="relative">
      <div
        className={clsx("relative flex w-fit items-center rounded-full p-1")}
      >
        {tabs.map((item, i) => (
          <button
            key={i}
            className={clsx(
              "z-10 rounded-full px-3 py-1 text-sm text-neutral-900 transition-colors hover:text-neutral-500 dark:text-neutral-600",
            )}
            onClick={() => {
              onSelectTab(i);
              item.onClick();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className={clsx(
          "[will-change: clip-path] pointer-events-none absolute left-0 top-0 z-20 flex w-fit items-center bg-neutral-950 p-1",
        )}
        style={{ clipPath: tabs[0]?.clip }}
        ref={ref}
        aria-hidden
      >
        {tabs.map((item, i) => (
          <span
            key={i}
            className={clsx(
              "z-20 rounded-full px-3 py-1 text-sm text-neutral-50 transition-colors",
            )}
            aria-hidden
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};
