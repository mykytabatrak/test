import { z } from "zod";
const BASE_URL =
  "https://raw.githubusercontent.com/odota/dotaconstants/master/build";

export const Attributes = ["str", "agi", "int", "all"] as const;
export type Attribute = (typeof Attributes)[number];

export function isAttribute(attribute: string): attribute is Attribute {
  return Attributes.includes(attribute as Attribute);
}

export const AttackTypes = ["Melee", "Ranged"] as const;
export type AttackType = (typeof AttackTypes)[number];

export function isAttackType(attackType: string): attackType is AttackType {
  return AttackTypes.includes(attackType as AttackType);
}

export const Hero = z.object({
  id: z.number(),
  name: z.string(),
  primary_attr: z.enum(Attributes),
  attack_type: z.enum(AttackTypes),
  img: z.string(),
  localized_name: z.string(),
});
export type Hero = z.infer<typeof Hero>;

export const Heroes = z.record(z.string(), Hero);
export type Heroes = z.infer<typeof Heroes>;

const HEROES_URL = `${BASE_URL}/heroes.json`;

export async function getHeroes() {
  const response = await fetch(HEROES_URL);
  const json = await response.json();
  const data = Heroes.parse(json);
  return data;
}

export async function getHero(id: string) {
  const heroes = await getHeroes();
  return heroes[id];
}

export async function getHeroList({
  name,
  attributes,
  attackType,
}: {
  name?: string | null;
  attributes?: Attribute[] | null;
  attackType?: AttackType | null;
}) {
  const heroes = await getHeroes();
  const heroesArray = Object.values(heroes);

  const filteredByAttributes =
    !!attributes && attributes.length !== 0
      ? heroesArray.filter((hero) => attributes.includes(hero.primary_attr))
      : heroesArray;
  const filteredByAttackType = !!attackType
    ? filteredByAttributes.filter((hero) => hero.attack_type === attackType)
    : filteredByAttributes;
  const filteredByName =
    !!name && name.length !== 0
      ? filteredByAttackType.filter((hero) => {
          return hero.name.toLowerCase().includes(name.toLowerCase());
        })
      : filteredByAttackType;

  return filteredByName;
}

const HeroesLore = z.record(z.string(), z.string());

const HERO_LORE_URL = `${BASE_URL}/hero_lore.json`;

export async function getHeroesLore() {
  const response = await fetch(HERO_LORE_URL);
  const json = await response.json();
  const data = HeroesLore.parse(json);
  return data;
}

export async function getHeroLore(id: string) {
  const hero = await getHero(id);
  const heroesLore = await getHeroesLore();
  return heroesLore[hero.name.replace("npc_dota_hero_", "")];
}

const HeroesToAbilities = z.record(
  z.string(),
  z.object({
    abilities: z.array(z.string()),
  })
);

const HERO_TO_ABILITIES_URL = `${BASE_URL}/hero_abilities.json`;

export async function getHeroesToAbilities() {
  const response = await fetch(HERO_TO_ABILITIES_URL);
  const json = await response.json();
  const data = HeroesToAbilities.parse(json);
  return data;
}

const Ability = z.object({
  dname: z.string().optional(),
  desc: z.string().optional(),
  img: z.string().optional(),
});
export type Ability = z.infer<typeof Ability>;

const Abilities = z.record(z.string(), Ability);

const ABILITIES_URL = `${BASE_URL}/abilities.json`;

export async function getAbilities() {
  const response = await fetch(ABILITIES_URL);
  const json = await response.json();
  const data = Abilities.parse(json);
  return data;
}

export async function getHeroAbilities(id: string) {
  const hero = await getHero(id);
  const heroesToAbilities = await getHeroesToAbilities();
  const abilities = await getAbilities();
  return heroesToAbilities[hero.name].abilities
    .filter((value) => value !== "generic_hidden")
    .map((abilityId) => abilities[abilityId]);
}

export function getHeroImageUrl(hero: z.infer<typeof Hero>) {
  return `https://cdn.cloudflare.steamstatic.com${hero.img}`;
}
