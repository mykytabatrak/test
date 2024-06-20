import { Box, Paper, Skeleton, Stack } from "@mui/material";
import { PrimaryAttribute } from "./PrimaryAttribute";
import { AttackType } from "./AttackType";

export function ProfileFallback() {
  return (
    <Skeleton variant="rounded" sx={{ width: "100%", maxWidth: "100%" }}>
      <Stack spacing={2}>
        <Paper elevation={1}>
          <Box sx={{ width: "100%", aspectRatio: "256/144" }} />
        </Paper>
        <PrimaryAttribute attribute="str" />
        <AttackType attackType="Melee" />
      </Stack>
    </Skeleton>
  );
}
