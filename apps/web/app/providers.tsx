"use client";

import { useEffect, useState, type FC, type ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export default (({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [mounted]);

  if (!mounted) return null;

  return (
    <ThemeProvider defaultTheme="system" enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
}) as FC<{ children: ReactNode }>;
