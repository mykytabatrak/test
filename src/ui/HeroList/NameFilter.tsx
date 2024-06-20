"use client";

import { startTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { TextField } from "@mui/material";
import { NAME_KEY } from "@/lib/searchParamKeys";
import { useHeroListContext } from "./context";

export function NameFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const name = searchParams.get(NAME_KEY) || "";
  const context = useHeroListContext();

  const handleSearchChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!!value) {
      params.set(NAME_KEY, value);
    } else {
      params.delete(NAME_KEY);
    }

    startTransition(() => {
      context.setOptimisticName(value);
      router.replace(`${pathname}?${params.toString()}`);
    });
  }, 300);

  return (
    <TextField
      defaultValue={name}
      onChange={(event) => {
        handleSearchChange(event.target.value);
      }}
      label="Search"
      placeholder="Anti-Mage"
      size="small"
    />
  );
}
