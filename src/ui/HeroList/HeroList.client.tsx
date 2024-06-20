"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { HeroCard } from "./HeroCard";
import { HeroListWrapper } from "./HeroListWrapper";
import { heroesOptions } from "./query";
import { AttackType, Attribute } from "@/lib/odota";

export function HeroList(
  params: Readonly<{
    attributes: Attribute[];
    attackType: AttackType | null;
    name: string | null;
  }>
) {
  const query = useSuspenseQuery(heroesOptions(params));

  return (
    <HeroListWrapper>
      {query.data.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </HeroListWrapper>
  );
}
