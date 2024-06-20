"use client";

import Image from "next/image";
import { getHeroImageUrl } from "@/lib/odota";
import { Stack, Paper, Typography } from "@mui/material";
import { PrimaryAttribute } from "./PrimaryAttribute";
import { AttackType } from "./AttackType";
import { useSuspenseQuery } from "@tanstack/react-query";
import { heroDetailsOptions } from "./query";

export function Profile({ id }: Readonly<{ id: string }>) {
  const query = useSuspenseQuery(heroDetailsOptions(id));

  return (
    <Stack spacing={2}>
      <Paper elevation={1}>
        <Image
          width={256}
          height={144}
          alt=""
          src={getHeroImageUrl(query.data)}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: 2,
          }}
        />
      </Paper>
      <Typography variant="h1" fontSize={64} fontWeight={700}>
        {query.data.localized_name}
      </Typography>
      <PrimaryAttribute attribute={query.data.primary_attr} />
      <AttackType attackType={query.data.attack_type} />
    </Stack>
  );
}
