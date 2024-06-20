import { getHero, getHeroAbilities, getHeroLore } from "@/lib/odota";
import { queryOptions } from "@tanstack/react-query";

export const heroDetailsOptions = (id: string) =>
  queryOptions({
    queryKey: ["hero", id] as const,
    queryFn: async ({ queryKey: [, id] }) => getHero(id),
  });

export const heroLoreOptions = (id: string) =>
  queryOptions({
    queryKey: ["lore", id] as const,
    queryFn: async ({ queryKey: [, id] }) => getHeroLore(id),
  });

export const heroAbilitiesOptions = (name: string) =>
  queryOptions({
    queryKey: ["abilities", name] as const,
    queryFn: async ({ queryKey: [, name] }) => getHeroAbilities(name),
  });
