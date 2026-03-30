import { CloudDownload } from "lucide-react";
import type { NavBarProps } from "./types";
import * as S from "./styles";

export type { NavBarProps } from "./types";

export function NavBar({
  links = [],
  logoSrc = null,
  resumeHref = "#",
  resumeLabel = "",
}: NavBarProps) {
  const activeUrl =
    links.find((l) => l.url.includes("#about"))?.url ?? links[0]?.url ?? "";

  return (
    <S.Nav>

      <S.LogoWrap>
        {logoSrc ? <S.LogoImg src={logoSrc} alt="Logo" /> : null}
      </S.LogoWrap>

      <S.Links>
        {links.map((l) => (
          <S.Link key={l.url} href={l.url} $active={l.url === activeUrl}>
            {l.label}
          </S.Link>
        ))}
      </S.Links>

      <S.ResumeButton href={resumeHref}>
        <CloudDownload size={16} strokeWidth={2} aria-hidden="true" />
        {resumeLabel}
      </S.ResumeButton>
    </S.Nav>
  );
}
