import { Suspense } from "react";
import { Lore } from "./Lore.server";
import { Abilities } from "./Abilities.server";
import { HeroDetailsLayout } from "./HeroDetailsLayout";
import { Profile } from "./Profile.server";
import { LoreFallback } from "./LoreFallback";
import { AbilitiesFallback } from "./AbilitiesFallback";
import { ProfileFallback } from "./ProfileFallback";

export async function HeroDetails({ id }: Readonly<{ id: string }>) {
  return (
    <HeroDetailsLayout
      profile={
        <Suspense fallback={<ProfileFallback />}>
          <Profile id={id} />
        </Suspense>
      }
      lore={
        <Suspense fallback={<LoreFallback />}>
          <Lore id={id} />
        </Suspense>
      }
      abilities={
        <Suspense fallback={<AbilitiesFallback />}>
          <Abilities id={id} />
        </Suspense>
      }
    />
  );
}
