import { Box } from "@mui/material";

export function AbilitiesWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "minmax(0,1fr)",
        md: "repeat(2,minmax(0,1fr))",
      }}
      gap={2}
    >
      {children}
    </Box>
  );
}
