import clsx from "clsx";

const examples = [
  {
    label: "Pointer",
    className: "pointer",
  },
  {
    label: "Move",
    className: "move",
  },
  {
    label: "Loading",
    className: "loading",
  },
  {
    label: "Drag",
    className: "drag",
  },
  {
    label: "Zoom In",
    className: "zoom-in",
  },
  {
    label: "Zoom Out",
    className: "zoom-out",
  },
];

export default function Buttons() {
  return (
    <div className="mt-2 flex items-center gap-x-2">
      {examples.map((example, index) => (
        <button
          key={index}
          className={clsx(
            example.className,
            "rounded-md border border-neutral-200 bg-neutral-100/50 px-4 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900",
          )}
        >
          {example.label}
        </button>
      ))}
    </div>
  );
}
