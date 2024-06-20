import { HeroCardFallback } from "./HeroCardFallback";
import { HeroListWrapper } from "./HeroListWrapper";

export function HeroListFallback() {
  return (
    <HeroListWrapper>
      {Array(124)
        .fill(null)
        .map((_value, index) => (
          <HeroCardFallback key={index} />
        ))}
    </HeroListWrapper>
  );
}
