import { AbilitiesWrapper } from "./AbilitiesWrapper";
import { AbilityFallback } from "./AbilityFallback";

export function AbilitiesFallback() {
  return (
    <AbilitiesWrapper>
      {new Array(6).fill(null).map((_key, index) => (
        <AbilityFallback key={index} />
      ))}
    </AbilitiesWrapper>
  );
}
