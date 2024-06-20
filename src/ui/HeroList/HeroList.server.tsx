import { AttackType, Attribute, getHeroList } from "@/lib/odota";
import { HeroListWrapper } from "./HeroListWrapper";
import { HeroCard } from "./HeroCard";

export async function HeroList({
  attributes,
  attackType,
  name,
}: Readonly<{
  attributes: Attribute[];
  attackType: AttackType | null;
  name: string | null;
}>) {
  const heroes = await getHeroList({ attributes, attackType, name });

  return (
    <HeroListWrapper>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </HeroListWrapper>
  );
}
