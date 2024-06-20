import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/getQueryClient";
import { heroesOptions } from "./query";
import { AttackType, Attribute } from "@/lib/odota";

export function HeroListHydrationBoundary({
  attributes,
  attackType,
  name,
  children,
}: Readonly<{
  attributes: Attribute[];
  attackType: AttackType | null;
  name: string | null;
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(
    heroesOptions({
      name,
      attributes,
      attackType,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
