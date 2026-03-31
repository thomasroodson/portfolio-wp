"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import * as S from "./LanguageSelect.styles";

export type LocaleCode = "pt-BR" | "en-US";

const OPTIONS: ReadonlyArray<{
  value: LocaleCode;
  src: string;
  label: string;
  alt: string;
}> = [
  { value: "pt-BR", src: "/br.png", label: "pt-BR", alt: "Brasil" },
  { value: "en-US", src: "/usa.png", label: "en-US", alt: "Estados Unidos" },
];

export function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<LocaleCode>("pt-BR");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const current = OPTIONS.find((o) => o.value === locale) ?? OPTIONS[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  const selectLocale = useCallback((value: LocaleCode) => {
    setLocale(value);
    setOpen(false);
  }, []);

  return (
    <S.Wrapper ref={rootRef}>
      <S.Trigger
        type="button"
        aria-label="Idioma da página"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={toggle}
      >
        <S.FlagImg src={current.src} alt="" width={14} height={14} aria-hidden />
        <S.Chevron $open={open} aria-hidden>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </S.Chevron>
      </S.Trigger>

      {open ? (
        <S.Menu id={listId} role="listbox" aria-label="Escolher idioma">
          {OPTIONS.map((opt) => (
            <S.MenuItem key={opt.value} role="presentation">
              <S.MenuButton
                type="button"
                role="option"
                aria-selected={opt.value === locale}
                onClick={() => selectLocale(opt.value)}
              >
                <S.FlagImg src={opt.src} alt={opt.alt} width={14} height={14} />
                {opt.label}
              </S.MenuButton>
            </S.MenuItem>
          ))}
        </S.Menu>
      ) : null}
    </S.Wrapper>
  );
}
