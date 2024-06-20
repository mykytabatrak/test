"use client";

import { ReactNode, useMemo, useOptimistic } from "react";
import { useSearchParams } from "next/navigation";
import { AttackType, Attribute, Attributes, isAttackType } from "@/lib/odota";
import {
  ATTACK_TYPE_KEY,
  ATTRIBUTE_KEY,
  NAME_KEY,
} from "@/lib/searchParamKeys";
import { HeroListContext } from "./context";

export function HeroListRoot({ children }: Readonly<{ children: ReactNode }>) {
  const searchParams = useSearchParams();

  const attributesParam = searchParams.getAll(ATTRIBUTE_KEY);
  const attributes = attributesParam.filter(
    (attribute): attribute is Attribute =>
      Attributes.includes(attribute as Attribute)
  );
  const [optimisticAttributes, setOptimisticAttributes] =
    useOptimistic<Attribute[]>(attributes);

  const attackTypeParam = searchParams.get(ATTACK_TYPE_KEY);
  const attackType =
    !!attackTypeParam && isAttackType(attackTypeParam) ? attackTypeParam : null;
  const [optimisticAttackType, setOptimisticAttackType] =
    useOptimistic<AttackType | null>(attackType);

  const name = searchParams.get(NAME_KEY) || "";
  const [optimisticName, setOptimisticName] = useOptimistic<string>(name);

  const isOptimistic =
    attributes !== optimisticAttributes ||
    attackType !== optimisticAttackType ||
    name !== optimisticName;

  return (
    <HeroListContext.Provider
      value={useMemo(
        () => ({
          isOptimistic,
          optimisticAttributes,
          setOptimisticAttributes,
          optimisticAttackType,
          setOptimisticAttackType,
          optimisticName,
          setOptimisticName,
        }),
        [
          isOptimistic,
          optimisticAttributes,
          setOptimisticAttributes,
          optimisticAttackType,
          setOptimisticAttackType,
          optimisticName,
          setOptimisticName,
        ]
      )}
    >
      {children}
    </HeroListContext.Provider>
  );
}
