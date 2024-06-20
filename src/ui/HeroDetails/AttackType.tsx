import { Box, Typography } from "@mui/material";
import type { AttackType } from "@/lib/odota";
import { AttackTypeImage } from "../AttackTypeImage";

const ATTACK_TYPE_TO_TITLE: Record<AttackType, string> = {
  Melee: "Melee",
  Ranged: "Ranged",
};

export function AttackType({
  attackType,
}: Readonly<{ attackType: AttackType }>) {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography
        variant="body1"
        fontSize={16}
        fontWeight={700}
        textTransform="uppercase"
      >
        Attack Type
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <AttackTypeImage width={32} height={32} attackType={attackType} />
        <Typography variant="body1" fontSize={24} textTransform="uppercase">
          {ATTACK_TYPE_TO_TITLE[attackType]}
        </Typography>
      </Box>
    </Box>
  );
}
