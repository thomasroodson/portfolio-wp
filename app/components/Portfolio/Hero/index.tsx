import type { HeroProps } from "./types";
import { SocialIcons } from "../SocialIcons";
import * as S from "./styles";

export type { HeroProps } from "./types";

export function Hero({
  headingH2 = null,
  descriptionHero = null,
  bgUrl = null,
}: HeroProps) {
  return (
    <S.Outer $bgUrl={bgUrl}>
      <S.Wrapper>
        <div>
          {headingH2 ? <S.Kicker>{headingH2}</S.Kicker> : null}
          {descriptionHero ? <S.Description>{descriptionHero}</S.Description> : null}
          <S.SocialRow>
            <SocialIcons />
          </S.SocialRow>
        </div>
      </S.Wrapper>
    </S.Outer>
  );
}
