import { createContext, useContext } from "react";
import { AttackType, Attribute } from "@/lib/odota";

export const HeroListContext = createContext<{
  isOptimistic: boolean;
  optimisticAttributes: Attribute[];
  setOptimisticAttributes: (attributes: Attribute[]) => void;
  optimisticAttackType: AttackType | null;
  setOptimisticAttackType: (attackType: AttackType | null) => void;
  optimisticName: string;
  setOptimisticName: (name: string) => void;
} | null>(null);

export function useHeroListContext() {
  const context = useContext(HeroListContext);

  if (context === null) {
    throw new Error(
      "useHeroListContext must be used within a HeroListProvider"
    );
  }

  return context;
}
