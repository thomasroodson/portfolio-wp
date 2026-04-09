import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import type { FooterProps } from "./types";
import * as S from "./styles";

export type { FooterProps } from "./types";

const ICON_SIZE = 20;

export function Footer({
  brandName,
  logoSrc = null,
  navLinks = [],
  copyright,
  facebookHref = "#",
  instagramHref = "#",
  githubHref = "#",
  linkedinHref = "#",
}: FooterProps) {
  const trimmedName = brandName.trim() || "portfolio";
  const initial = trimmedName.charAt(0).toUpperCase();

  const socialItems = [
    { href: facebookHref, label: "Facebook", Icon: Facebook },
    { href: githubHref, label: "GitHub", Icon: Github },
    { href: instagramHref, label: "Instagram", Icon: Instagram },
    { href: linkedinHref, label: "LinkedIn", Icon: Linkedin },
  ] as const;

  return (
    <S.Wrapper id="footer">
      <S.Panel>
        <S.BrandRow>
          {logoSrc ? (
            <S.LogoImg src={logoSrc} alt={trimmedName} />
          ) : (
            <>
              <S.LogoMark aria-hidden="true">{initial}</S.LogoMark>
              <S.BrandName>{trimmedName}</S.BrandName>
            </>
          )}
        </S.BrandRow>

        {navLinks.length > 0 ? (
          <S.Nav aria-label="Links do rodapé">
            <S.NavList>
              {navLinks.map((link) => (
                <S.NavItem key={`${link.url}-${link.label}`}>
                  <S.NavLink href={link.url}>{link.label}</S.NavLink>
                </S.NavItem>
              ))}
            </S.NavList>
          </S.Nav>
        ) : null}

        <S.SocialRow>
          {socialItems.map(({ href, label, Icon }) => (
            <S.SocialLink key={label} href={href} aria-label={label}>
              <Icon size={ICON_SIZE} strokeWidth={2} aria-hidden="true" />
            </S.SocialLink>
          ))}
        </S.SocialRow>

        {copyright ? <S.Copyright>{copyright}</S.Copyright> : null}
      </S.Panel>
    </S.Wrapper>
  );
}
