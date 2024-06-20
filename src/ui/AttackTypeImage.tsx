import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { AttackType } from "@/lib/odota";
import { STEAMSTATIC_ICONS_URL } from "@/lib/steamstatic";

const ATTACK_TYPE_TO_ALT: Record<AttackType, string> = {
  Melee: "Melee Attack Type",
  Ranged: "Ranged Attack Type",
};

const ATTACK_TYPE_TO_PATH: Record<AttackType, string> = {
  Melee: "/melee.svg",
  Ranged: "/ranged.svg",
};

export function AttackTypeImage({
  attackType,
  ...props
}: Readonly<
  { attackType: AttackType } & Omit<
    ComponentPropsWithoutRef<typeof Image>,
    "src" | "alt"
  >
>) {
  return (
    <Image
      src={`${STEAMSTATIC_ICONS_URL}${ATTACK_TYPE_TO_PATH[attackType]}`}
      alt={ATTACK_TYPE_TO_ALT[attackType]}
      {...props}
    />
  );
}
