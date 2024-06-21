import clsx from "clsx";
import { FC } from "react";

export default (({ top, bottom }) => (
  <div className="w-lg pointer-events-none absolute -z-10 h-full" aria-hidden>
    {top && (
      <div className="dashed absolute bottom-0 left-0 h-[1px] w-screen" />
    )}
    {bottom && (
      <div className="dashed absolute bottom-0 left-0 h-[1px] w-screen" />
    )}
    <div className="relative left-0 top-0 h-full w-full">
      <div className="relative left-0 top-0 h-full w-full">
        <div className="relative flex h-full w-full justify-between">
          {["bg-neutral-200", "dashed", "dashed", "bg-neutral-200"].map(
            (bg, i) => (
              <div className={clsx("w-[1px]", bg)} key={i} />
            ),
          )}
        </div>
      </div>
    </div>
  </div>
)) as FC<{ top?: boolean; bottom?: boolean }>;
