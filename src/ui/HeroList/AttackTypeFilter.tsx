"use client";

import { startTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { AttackType, AttackTypes } from "@/lib/odota";
import { AttackTypeImage } from "@/ui/AttackTypeImage";
import { ATTACK_TYPE_KEY } from "@/lib/searchParamKeys";
import { useHeroListContext } from "./context";

const ATTACK_TYPE_TO_LABEL: Record<AttackType, string> = {
  Melee: "Melee",
  Ranged: "Ranged",
};

export function AttackTypeFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const context = useHeroListContext();

  const handleAttackTypeChange = (value: AttackType | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!!value) {
      params.set(ATTACK_TYPE_KEY, value);
    } else {
      params.delete(ATTACK_TYPE_KEY);
    }

    startTransition(() => {
      context.setOptimisticAttackType(value);
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography fontSize={18} textTransform="uppercase">
        Attack Types
      </Typography>
      <ToggleButtonGroup
        value={context.optimisticAttackType}
        exclusive
        onChange={(_event, value: AttackType) => {
          handleAttackTypeChange(value);
        }}
      >
        {AttackTypes.map((attackType) => (
          <ToggleButton
            key={attackType}
            value={attackType}
            aria-label={ATTACK_TYPE_TO_LABEL[attackType]}
          >
            <AttackTypeImage attackType={attackType} width={24} height={24} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
