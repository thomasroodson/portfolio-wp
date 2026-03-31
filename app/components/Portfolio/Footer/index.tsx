import { SocialIcons } from "../SocialIcons";
import type { FooterProps } from "./types";
import * as S from "./styles";

export type { FooterProps } from "./types";

export function Footer({
  copyright,
  tagline = null,
  githubHref,
  linkedinHref,
}: FooterProps) {
  const trimmedTagline = tagline?.trim() ?? "";

  return (
    <S.Wrapper id="footer">
      <S.Inner>
        <S.TopRow $alignEnd={!trimmedTagline}>
          {trimmedTagline ? <S.Tagline>{trimmedTagline}</S.Tagline> : null}
          <S.SocialWrap>
            <SocialIcons githubHref={githubHref} linkedinHref={linkedinHref} />
          </S.SocialWrap>
        </S.TopRow>
        <S.Divider />
        <S.Copyright>{copyright}</S.Copyright>
      </S.Inner>
    </S.Wrapper>
  );
}
