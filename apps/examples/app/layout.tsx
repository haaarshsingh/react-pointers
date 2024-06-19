import "./globals.css";

import clsx from "clsx";
import { FC, ReactNode } from "react";

export default (({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={clsx("bg-slate-50")}>{children}</body>
  </html>
)) as FC<{ children: ReactNode }>;
