import Image from "next/image";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import type { Ability } from "@/lib/odota";
import { STEAMSTATIC_URL } from "@/lib/steamstatic";

export function Ability({ ability }: { ability: Ability }) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2}>
          {!!ability.img ? (
            <Image
              width={128}
              height={128}
              src={`${STEAMSTATIC_URL}${ability.img}`}
              alt=""
              style={{
                width: 96,
                height: 96,
              }}
            />
          ) : (
            <Box sx={{ width: 96, height: 96 }} />
          )}
          <Stack spacing={1}>
            <Typography variant="body1" fontSize={22} fontWeight={700}>
              {ability.dname}
            </Typography>
            <Typography variant="body1" fontSize={18}>
              {ability.desc}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
