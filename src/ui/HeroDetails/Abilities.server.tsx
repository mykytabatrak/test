import { getHeroAbilities } from "@/lib/odota";
import { Ability } from "@/ui/HeroDetails/Ability";
import { AbilitiesWrapper } from "./AbilitiesWrapper";

export async function Abilities({ id }: { id: string }) {
  const abilities = await getHeroAbilities(id);

  return (
    <AbilitiesWrapper>
      {abilities.map((ability, index) => (
        <Ability key={index} ability={ability} />
      ))}
    </AbilitiesWrapper>
  );
}
