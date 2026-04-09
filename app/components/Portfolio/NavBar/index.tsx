"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { CloudDownload, Menu, X } from "lucide-react";
import { LanguageSelect } from "./LanguageSelect";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (menuOpen) {
      closeButtonRef.current?.focus();
    } else if (wasOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasOpenRef.current = menuOpen;
  }, [menuOpen]);

  return (
    <>
      <S.Nav>
        <S.LogoWrap>
          {logoSrc ? <S.LogoImg src={logoSrc} alt="Logo" /> : null}
        </S.LogoWrap>

        <S.LinksGroup>
          <S.Links>
            {links.map((l) => (
              <S.Link key={l.url} href={l.url} $active={l.url === activeUrl}>
                {l.label}
              </S.Link>
            ))}
          </S.Links>
          <LanguageSelect />
        </S.LinksGroup>

        <S.ResumeButton href={resumeHref}>
          <CloudDownload size={16} strokeWidth={2} aria-hidden="true" />
          {resumeLabel}
        </S.ResumeButton>

        <S.MobileMenuButton
          ref={menuButtonRef}
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls={panelId}
          onClick={toggleMenu}
        >
          <Menu size={22} strokeWidth={2} aria-hidden="true" />
        </S.MobileMenuButton>
      </S.Nav>

      <S.Overlay $open={menuOpen} aria-hidden="true" onClick={closeMenu} />

      <S.Drawer
        id={panelId}
        $open={menuOpen}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        aria-label="Menu de navegação"
      >
        <S.DrawerHeader>
          <S.CloseButton
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <X size={22} strokeWidth={2} aria-hidden="true" />
          </S.CloseButton>
        </S.DrawerHeader>

        <S.DrawerLinks aria-label="Links da página">
          {links.map((l) => (
            <S.DrawerLink
              key={l.url}
              href={l.url}
              $active={l.url === activeUrl}
              onClick={closeMenu}
            >
              {l.label}
            </S.DrawerLink>
          ))}
        </S.DrawerLinks>

        <S.DrawerFooter>
          <LanguageSelect />
          <S.DrawerResume href={resumeHref} onClick={closeMenu}>
            <CloudDownload size={16} strokeWidth={2} aria-hidden="true" />
            {resumeLabel}
          </S.DrawerResume>
        </S.DrawerFooter>
      </S.Drawer>
    </>
  );
}
