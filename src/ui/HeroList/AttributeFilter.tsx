"use client";

import { startTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Attribute, Attributes } from "@/lib/odota";
import { AttributeImage } from "@/ui/AttributeImage";
import { ATTRIBUTE_KEY } from "@/lib/searchParamKeys";
import { useHeroListContext } from "./context";

const ATTRIBUTE_TO_LABEL: Record<Attribute, string> = {
  str: "Strength",
  agi: "Agility",
  int: "Intelligence",
  all: "All",
};

export function AttributeFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const context = useHeroListContext();

  const handleAttributesChange = (value: Attribute[]) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(ATTRIBUTE_KEY);
    for (const attribute of value) {
      params.append(ATTRIBUTE_KEY, attribute);
    }

    startTransition(() => {
      context.setOptimisticAttributes(value);
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography fontSize={18} textTransform="uppercase">
        Attributes
      </Typography>
      <ToggleButtonGroup
        value={context.optimisticAttributes}
        onChange={(_event, value: Attribute[]) => {
          handleAttributesChange(value);
        }}
      >
        {Attributes.map((attribute) => (
          <ToggleButton
            key={attribute}
            value={attribute}
            aria-label={ATTRIBUTE_TO_LABEL[attribute]}
          >
            <AttributeImage attribute={attribute} width={24} height={24} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
