import type { SectionTitleProps } from "./types";
import * as S from "./styles";

export type { SectionTitleProps } from "./types";

export function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <div id={id}>
      <S.Title>{children}</S.Title>
      <S.Rule />
    </div>
  );
}
