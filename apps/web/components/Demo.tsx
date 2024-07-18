"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import * as Select from "@radix-ui/react-select";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import Layout from "./Layout";
import { TbFileCode, TbGitPullRequest } from "react-icons/tb";
import { highlight } from "sugar-high";
import { motion } from "framer-motion";

type Path = { w: number; offset: number }[];

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

const code = (props: string, normal?: boolean) => `const props = ${props}

export default () => (
  <CursorProvider>
    <Cursor {...props} ${normal ? "disabled={true}" : ""} />
  </CursorProvider>
);
`;

export default () => {
  const [cursor, setCursor] = useState("auto");
  const [pack, setPack] = useState<Cursor>(Cursor.default);

  const codeHTML = highlight(
    code(
      pack === Cursor.default
        ? "[];"
        : `${
            cursor === "auto"
              ? `[
  { cursor: <Arrow /> },
  { cursor: <Pointer />, elements: ["button", "a"] },
  { cursor: <Loading />, elements: [".loading"] },
];`
              : cursor === "pointer"
                ? "[{ cursor: <Pointer /> }];"
                : "[{ cursor: <Loading /> }];"
          }
`,
      pack === Cursor.default ? true : false,
    ),
  );

  return (
    <Layout>
      <section className="mb-36 mt-24">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <Tabs setPack={setPack} />
            <CursorSelect
              disabled={pack === Cursor.default}
              cursor={cursor}
              setCursor={setCursor}
            />
          </div>
          <pre className="mt-2 rounded-xl border border-neutral-200 bg-neutral-100 p-4 text-xs dark:border-neutral-800 dark:bg-neutral-900">
            <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
          </pre>
        </div>
        <div className="mt-14 grid grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center">
                {feature.icon}
                <span className="ml-1">{feature.label}</span>
              </div>
              <p className="mb-6 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
              <a
                href={feature.link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-500 transition-colors hover:text-sky-400 dark:text-sky-500 dark:hover:text-sky-600"
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

const CursorSelect: FC<{
  disabled: boolean;
  cursor: string;
  setCursor: Dispatch<SetStateAction<string>>;
}> = ({ disabled, cursor, setCursor }) => (
  <Select.Root
    defaultValue="auto"
    onValueChange={(e) => setCursor(e)}
    value={disabled ? "auto" : cursor}
    disabled={disabled}
  >
    <Select.Trigger
      className="group inline-flex h-[28px] items-center justify-center gap-1 rounded-md border border-neutral-200 bg-neutral-100 px-3 text-sm leading-none outline-none transition-all active:bg-neutral-300/70 enabled:hover:border-neutral-300 enabled:hover:bg-neutral-300/50 disabled:cursor-not-allowed disabled:text-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:active:bg-neutral-700/70 dark:enabled:hover:border-neutral-700 dark:enabled:hover:bg-neutral-700/50 dark:disabled:text-neutral-700"
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
            <SelectItem value="pointer">Pointer</SelectItem>
            <SelectItem value="loading">Loading</SelectItem>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const Tabs: FC<{ setPack: Dispatch<SetStateAction<Cursor>> }> = ({
  setPack,
}) => {
  const [reset, setReset] = useState(false);
  const [duration, setDuration] = useState(0.1);

  const [active, setActive] = useState(0);
  const [clipPaths, setClipPaths] = useState<Path>([]);
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const tabs = useMemo(
    () => [
      {
        label: "Default",
        onClick: () => setPack(Cursor.default),
      },
      {
        label: "Pixel Art",
        onClick: () => setPack(Cursor.pixel),
      },
      {
        label: "Animated Circle",
        onClick: () => setPack(Cursor.ring),
      },
      {
        label: "macOS",
        onClick: () => setPack(Cursor.mac),
      },
    ],
    [],
  );

  useEffect(() => {
    const newClipPaths = tabs.map((_, i) => {
      const rect = tabRefs.current[i]!.getBoundingClientRect();
      return {
        w: rect.width,
        offset: rect.left - tabRefs.current[0]!.getBoundingClientRect().left,
      };
    });

    setClipPaths(newClipPaths);
  }, [tabs]);

  useEffect(() => {
    if (reset) {
      setDuration(0.1);
      setTimeout(() => setReset(false), 200);
    }
  }, [reset]);

  const getClipPath = (i: number) => {
    if (clipPaths.length === 0) return "";

    if (clipPaths[i]) {
      const { offset, w } = clipPaths[i];
      return `inset(4px calc(100% - (${offset + 4 + 0}px + ${w}px)) calc(100% - (0px + 32px)) ${offset + 4 + 0}px round 20px)`;
    }
  };

  return (
    <div className="relative">
      <div
        className={clsx("relative flex w-fit items-center rounded-full p-1")}
      >
        {tabs.map((item, i) => (
          <button
            key={i}
            ref={(el) => {
              tabRefs.current[i] = el!;
            }}
            className={clsx(
              "z-10 rounded-full px-3 py-1 text-sm tracking-tight text-neutral-900 transition-colors hover:text-neutral-500 dark:text-neutral-600",
            )}
            onClick={() => {
              setActive(i);
              item.onClick();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <motion.div
        style={{ clipPath: getClipPath(active) }}
        animate={{ clipPath: getClipPath(active) }}
        transition={{
          type: duration === 0.1 ? "spring" : "tween",
          stiffness: 300,
          damping: 29,
          duration: duration,
        }}
        className={clsx(
          "[will-change: clip-path] pointer-events-none absolute left-0 top-0 z-20 flex w-fit items-center bg-neutral-950 p-1 dark:bg-neutral-50",
        )}
        aria-hidden
      >
        {tabs.map((item, i) => (
          <span
            key={i}
            className={clsx(
              "z-20 rounded-full px-3 py-1 text-sm tracking-tight text-neutral-50 transition-colors dark:text-neutral-950",
            )}
            aria-hidden
          >
            {item.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
