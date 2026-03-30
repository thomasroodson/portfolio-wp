"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useMemo } from "react";
import { RoleCard } from "../RoleCard";
import { ProjectCard } from "../ProjectCard";
import type { ProjectCardProps } from "../ProjectCard";
import type { ExpertiseSectionProps } from "./types";
import * as S from "./styles";

export type { ExpertiseSectionProps } from "./types";

const DEFAULT_DOT = "#64748b";
const PROJECTS: ProjectCardProps[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?auto=format&fit=crop&w=1200&q=80",
    title: "Explore our Seoul.",
    details: "4,200 hotéis, 345 voos locais e 234 fornecedores de ônibus.",
    ctaLabel: "Explore",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
    title: "Discover Rio.",
    details: "2,180 hotéis, 198 voos locais e 90 experiências guiadas.",
    ctaLabel: "View",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    title: "Visit Vancouver.",
    details: "1,760 hotéis, 144 voos locais e 120 passeios urbanos.",
    ctaLabel: "Open",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    title: "Experience Tokyo.",
    details: "3,050 hotéis, 262 voos locais e 188 atividades premium.",
    ctaLabel: "Explore",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
    title: "Discover Paris.",
    details: "2,910 hotéis, 223 voos locais e 146 tours culturais.",
    ctaLabel: "View",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1526481280695-3c4691c244d7?auto=format&fit=crop&w=1200&q=80",
    title: "Travel Lisbon.",
    details: "1,430 hotéis, 109 voos locais e 96 roteiros gastronômicos.",
    ctaLabel: "Open",
  },
];

function splitSkillsHalf<T>(items: T[]): [T[], T[]] {
  if (items.length === 0) return [[], []];
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export function ExpertiseSection({
  titulo,
  descricao,
  skills,
  projects,
}: ExpertiseSectionProps) {
  const autoplay = useMemo(
    () => Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true }),
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [autoplay]);
  const [skillsLeft, skillsRight] = splitSkillsHalf(skills);
  const handlePrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const handleNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const carouselProjects =
    projects && projects.length > 0 ? projects : PROJECTS;

  const renderSkillColumn = (column: typeof skills, keyPrefix: string) => (
    <S.SkillsList>
      {column.map((s, i) => (
        <S.SkillItem key={`${keyPrefix}-${s.titulo}-${i}`}>
          <S.SkillHeading>
            <S.Dot $color={s.corDots || DEFAULT_DOT} />
            <S.SkillTitle>{s.titulo}</S.SkillTitle>
          </S.SkillHeading>
          <S.SkillDescription>{s.descricao}</S.SkillDescription>
        </S.SkillItem>
      ))}
    </S.SkillsList>
  );

  return (
    <S.Wrapper id="experience">
      <S.Content>
        <S.MyExpertise>{titulo}</S.MyExpertise>
        <S.Subtitle>{descricao}</S.Subtitle>

        <S.Grid>
          {renderSkillColumn(skillsLeft, "ex-l")}
          {renderSkillColumn(skillsRight, "ex-r")}
        </S.Grid>

        <RoleCard />
        <S.ProjectsHeader>
          <S.ProjectsHeading>Projects</S.ProjectsHeading>
          <S.ProjectsControls>
            <S.NavButton type="button" onClick={handlePrev} aria-label="Projetos anteriores">
              <ChevronLeft size={18} />
            </S.NavButton>
            <S.NavButton type="button" onClick={handleNext} aria-label="Próximos projetos">
              <ChevronRight size={18} />
            </S.NavButton>
          </S.ProjectsControls>
        </S.ProjectsHeader>
        <S.ProjectsCarousel>
          <S.ProjectsViewport ref={emblaRef}>
            <S.ProjectsTrack>
              {carouselProjects.map((project, index) => (
                <S.ProjectSlide key={`${project.title}-${index}`}>
                  <ProjectCard
                    imageUrl={project.imageUrl}
                    title={project.title}
                    details={project.details}
                    ctaLabel={project.ctaLabel}
                    href={project.href}
                  />
                </S.ProjectSlide>
              ))}
            </S.ProjectsTrack>
          </S.ProjectsViewport>
        </S.ProjectsCarousel>
      </S.Content>
    </S.Wrapper>
  );
}
