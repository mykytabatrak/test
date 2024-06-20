import { Suspense } from "react";
import { Lore } from "./Lore.client";
import { HeroDetailsLayout } from "./HeroDetailsLayout";
import { Profile } from "./Profile.client";
import { LoreFallback } from "./LoreFallback";
import { AbilitiesFallback } from "./AbilitiesFallback";
import { LorePreload } from "./LorePreload";
import { ProfilePreload } from "./ProfilePreload";
import { ProfileFallback } from "./ProfileFallback";
import { AbilitiesPreload } from "./AbilititesPreload";
import { Abilities } from "./Abilities.client";

export function HeroDetails({ id }: Readonly<{ id: string }>) {
  return (
    <ProfilePreload id={id}>
      <LorePreload id={id}>
        <AbilitiesPreload id={id}>
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
        </AbilitiesPreload>
      </LorePreload>
    </ProfilePreload>
  );
}
