import type { ProjectCardProps } from "../ProjectCard";

export type ExpertiseSkill = {
  corDots: string;
  descricao: string;
  titulo: string;
};

export type ExpertiseSectionProps = {
  titulo: string;
  descricao: string;
  skills: ExpertiseSkill[];
  /** Quando vazio ou omitido, o carrossel usa dados de demonstração. */
  projects?: ProjectCardProps[];
};
