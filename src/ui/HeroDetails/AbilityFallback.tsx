import { Skeleton } from "@mui/material";
import { Ability } from "./Ability";

export function AbilityFallback() {
  return (
    <Skeleton variant="rounded" width="100%">
      <Ability ability={{ img: "", dname: "", desc: "" }} />
    </Skeleton>
  );
}
