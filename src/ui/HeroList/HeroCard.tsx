import { Card, CardContent, Typography } from "@mui/material";
import { getHeroImageUrl, Hero } from "@/lib/odota";
import { AttributeImage } from "../AttributeImage";
import { CARD_HEIGHT } from "./constants";

export function HeroCard({ hero }: Readonly<{ hero: Hero }>) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "end",
        height: CARD_HEIGHT,
        background: `url(${getHeroImageUrl(hero)}) center/cover`,
        borderImage: "fill 0 linear-gradient(#0000 40%,#000)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "end",
          gap: 1,
        }}
      >
        <AttributeImage width={30} height={30} attribute={hero.primary_attr} />
        <Typography variant="body1" fontSize={18} fontWeight={600}>
          {hero.localized_name}
        </Typography>
      </CardContent>
    </Card>
  );
}
