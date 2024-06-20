import Image from "next/image";
import { getHero, getHeroImageUrl } from "@/lib/odota";
import { Stack, Paper, Typography } from "@mui/material";
import { PrimaryAttribute } from "./PrimaryAttribute";
import { AttackType } from "./AttackType";

export async function Profile({ id }: Readonly<{ id: string }>) {
  const hero = await getHero(id);

  return (
    <Stack spacing={2}>
      <Paper elevation={1}>
        <Image
          width={256}
          height={144}
          alt=""
          src={getHeroImageUrl(hero)}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: 2,
          }}
        />
      </Paper>
      <Typography variant="h1" fontSize={64} fontWeight={700}>
        {hero.localized_name}
      </Typography>
      <PrimaryAttribute attribute={hero.primary_attr} />
      <AttackType attackType={hero.attack_type} />
    </Stack>
  );
}
