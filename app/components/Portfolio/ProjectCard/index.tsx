import type { ProjectCardProps } from "./types";
import * as S from "./styles";

export type { ProjectCardProps } from "./types";

export function ProjectCard({
  imageUrl,
  title,
  details,
  ctaLabel,
  href,
}: ProjectCardProps) {
  return (
    <S.Card $imageUrl={imageUrl}>
      <S.Content>
        <S.Texts>
          <S.Title>{title}</S.Title>
          <S.Details>{details}</S.Details>
        </S.Texts>
        <S.ActionRow>
          {href ? (
            <S.CtaLink href={href}>{ctaLabel}</S.CtaLink>
          ) : (
            <S.CtaButton type="button">{ctaLabel}</S.CtaButton>
          )}
        </S.ActionRow>
      </S.Content>
    </S.Card>
  );
}
