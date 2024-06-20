import { AttackType, Attribute, getHeroList } from "@/lib/odota";
import { queryOptions } from "@tanstack/react-query";

export const heroesOptions = (params: {
  name?: string | null;
  attributes?: Attribute[] | null;
  attackType?: AttackType | null;
}) =>
  queryOptions({
    queryKey: ["heroes", params] as const,
    queryFn: async ({ queryKey: [, params] }) => getHeroList(params),
  });
