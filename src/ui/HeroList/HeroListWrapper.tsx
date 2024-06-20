"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";
import { useHeroListContext } from "./context";

export function HeroListWrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  const context = useHeroListContext();

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill,minmax(225px,1fr))"
      gridAutoRows="min-content"
      gap={2}
      sx={{
        opacity: context.isOptimistic ? 0.5 : 1,
      }}
    >
      {children}
    </Box>
  );
}
