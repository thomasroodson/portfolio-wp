import { Github, Linkedin } from "lucide-react";
import type { SocialIconsProps } from "./types";
import * as S from "./styles";

export type { SocialIconsProps } from "./types";

export function SocialIcons({
  githubHref = "#",
  linkedinHref = "#",
}: SocialIconsProps) {
  return (
    <>
      <S.IconButton href={githubHref} aria-label="GitHub">
        <Github size={18} strokeWidth={2} aria-hidden="true" />
      </S.IconButton>
      <S.IconButton href={linkedinHref} aria-label="LinkedIn">
        <Linkedin size={18} strokeWidth={2} aria-hidden="true" />
      </S.IconButton>
    </>
  );
}
