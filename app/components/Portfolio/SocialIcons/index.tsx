import { Github, Linkedin } from "lucide-react";
import * as S from "./styles";

export type { SocialIconsProps } from "./types";

export function SocialIcons() {
  return (
    <>
      <S.IconButton href="#" aria-label="GitHub">
        <Github size={18} strokeWidth={2} aria-hidden="true" />
      </S.IconButton>
      <S.IconButton href="#" aria-label="LinkedIn">
        <Linkedin size={18} strokeWidth={2} aria-hidden="true" />
      </S.IconButton>
    </>
  );
}
