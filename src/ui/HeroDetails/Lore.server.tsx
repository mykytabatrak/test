import { Box, Typography } from "@mui/material";
import { getHeroLore } from "@/lib/odota";

export async function Lore({ id }: { id: string }) {
  const lore = await getHeroLore(id);

  return (
    <Box overflow="auto">
      <Typography sx={{ height: 0 }} variant="body1" fontSize={16}>
        {lore}
      </Typography>
    </Box>
  );
}
