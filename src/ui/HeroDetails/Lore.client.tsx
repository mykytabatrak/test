"use client";

import { Box, Typography } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { heroLoreOptions } from "./query";

export function Lore({ id }: { id: string }) {
  const query = useSuspenseQuery(heroLoreOptions(id));

  return (
    <Box overflow="auto">
      <Typography sx={{ height: 0 }} variant="body1" fontSize={16}>
        {query.data}
      </Typography>
    </Box>
  );
}
