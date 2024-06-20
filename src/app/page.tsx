import { ReactNode, Suspense } from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";
import {
  ATTACK_TYPE_KEY,
  ATTRIBUTE_KEY,
  NAME_KEY,
} from "@/lib/searchParamKeys";
import { AttackType, Attribute, isAttackType, isAttribute } from "@/lib/odota";
import { HeroListFallback } from "@/ui/HeroList/HeroListFallback";
import { HeroListRoot } from "@/ui/HeroList/HeroListRoot";
import { AttributeFilter } from "@/ui/HeroList/AttributeFilter";
import { AttackTypeFilter } from "@/ui/HeroList/AttackTypeFilter";
import { NameFilter } from "@/ui/HeroList/NameFilter";
import { HeroList } from "@/ui/HeroList/HeroList.client";
import { HeroListHydrationBoundary } from "@/ui/HeroList/HeroListHydrationBoundary";
// import { HeroList } from "@/ui/HeroList/HeroList.server";

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  const name = getNameParam(searchParams);
  const attributes = getAttributesParam(searchParams);
  const attackType = getAttackTypeParam(searchParams);

  return (
    <Container component="main" sx={{ py: 4 }}>
      <Typography variant="h1" textAlign="center" fontSize={60} mb={1}>
        CHOOSE YOUR HERO
      </Typography>
      <Typography variant="body1" textAlign="center" fontSize={20} mb={4}>
        From magical tacticians to fierce brutes and cunning rogues, Dota
        2&apos;s hero pool is massive and limitlessly diverse. Unleash
        incredible abilities and devastating ultimates on your way to victory.
      </Typography>
      <HeroListRoot>
        <FilterBar>
          <Typography fontSize={18} textTransform="uppercase">
            Filter Heroes
          </Typography>
          <AttributeFilter />
          <AttackTypeFilter />
          <NameFilter />
        </FilterBar>
        <HeroListHydrationBoundary
          attributes={attributes}
          attackType={attackType}
          name={name}
        >
          <Suspense fallback={<HeroListFallback />}>
            <HeroList
              attributes={attributes}
              attackType={attackType}
              name={name}
            />
          </Suspense>
        </HeroListHydrationBoundary>
      </HeroListRoot>
    </Container>
  );
}

function FilterBar({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Card
      elevation={2}
      sx={{
        mb: 4,
        borderRadius: 1,
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
            lg: "1fr 2fr 2fr 2fr",
          },
          alignItems: "center",
          gap: 3,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}

function getNameParam(searchParams: {
  [key: string]: string | string[] | undefined;
}): string | null {
  const nameParam = searchParams[NAME_KEY];

  if (!!nameParam && !Array.isArray(nameParam) && nameParam.length !== 0) {
    return nameParam;
  }

  return null;
}

function getAttributesParam(searchParams: {
  [key: string]: string | string[] | undefined;
}): Attribute[] {
  const attributeParam = searchParams[ATTRIBUTE_KEY];

  if (!!attributeParam && Array.isArray(attributeParam)) {
    return attributeParam.filter(isAttribute);
  }

  if (!!attributeParam && isAttribute(attributeParam)) {
    return [attributeParam];
  }

  return [];
}

function getAttackTypeParam(searchParams: {
  [key: string]: string | string[] | undefined;
}): AttackType | null {
  const attackTypeParam = searchParams[ATTACK_TYPE_KEY];

  if (
    !!attackTypeParam &&
    !Array.isArray(attackTypeParam) &&
    isAttackType(attackTypeParam)
  ) {
    return attackTypeParam;
  }

  return null;
}
