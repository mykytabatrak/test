import { Skeleton } from "@mui/material";
import { CARD_HEIGHT } from "./constants";

export function HeroCardFallback() {
  return <Skeleton height={CARD_HEIGHT} variant="rounded" />;
}
