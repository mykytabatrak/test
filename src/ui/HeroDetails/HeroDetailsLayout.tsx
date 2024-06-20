import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";

export function HeroDetailsLayout({
  profile,
  lore,
  abilities,
}: Readonly<{
  profile: ReactNode;
  lore: ReactNode;
  abilities: ReactNode;
}>) {
  return (
    <Stack spacing={4}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "minmax(0,1fr)", md: "2fr 3fr" },
          gridTemplateRows: {
            xs: "min-content minmax(0,300px)",
            md: "minmax(0,min-content)",
          },
          gap: 4,
        }}
      >
        {profile}
        {lore}
      </Box>
      {abilities}
    </Stack>
  );
}
