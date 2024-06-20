"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Ability } from "@/ui/HeroDetails/Ability";
import { AbilitiesWrapper } from "./AbilitiesWrapper";
import { heroAbilitiesOptions } from "./query";

export function Abilities({ id }: { id: string }) {
  const query = useSuspenseQuery(heroAbilitiesOptions(id));

  return (
    <AbilitiesWrapper>
      {query.data.map((ability, index) => (
        <Ability key={index} ability={ability} />
      ))}
    </AbilitiesWrapper>
  );
}
