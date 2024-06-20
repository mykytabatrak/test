import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { Attribute } from "@/lib/odota";
import { STEAMSTATIC_ICONS_URL } from "@/lib/steamstatic";

const ATTRIBUTE_TO_ALT: Record<Attribute, string> = {
  str: "Strength Attribute",
  agi: "Agility Attribute",
  int: "Intelligence Attribute",
  all: "All Attribute",
};

const ATTRIBUTE_TO_PATH: Record<Attribute, string> = {
  str: "/hero_strength.png",
  agi: "/hero_agility.png",
  int: "/hero_intelligence.png",
  all: "/hero_universal.png",
};

export function AttributeImage({
  attribute,
  ...props
}: Readonly<
  { attribute: Attribute } & Omit<
    ComponentPropsWithoutRef<typeof Image>,
    "src" | "alt"
  >
>) {
  return (
    <Image
      src={`${STEAMSTATIC_ICONS_URL}${ATTRIBUTE_TO_PATH[attribute]}`}
      alt={ATTRIBUTE_TO_ALT[attribute]}
      {...props}
    />
  );
}
