import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.spacing.xl};
  background-color: #000000;
  background-image: radial-gradient(
    ellipse 130% 120% at 27% 50%,
    rgba(32, 10, 61, 0.82) 0%,
    rgba(26, 11, 46, 0.28) 42%,
    rgba(0, 0, 0, 0) 68%
  );
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 900px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const MyExpertise = styled.h3`
  margin: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.15;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 899px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 1.12;
  }
`;

export const Subtitle = styled.p`
  margin: ${({ theme }) => theme.spacing.md} auto 64px auto;
  max-width: min(100%, 1024px);
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.5;

  @media (max-width: 899px) {
    line-height: 1.28;
  }
`;

export const Grid = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const SkillsList = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const SkillHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SkillTitle = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 899px) {
    line-height: 1.22;
  }
`;

export const SkillDescription = styled.p`
  margin: 0;
  padding-left: calc(9px + ${({ theme }) => theme.spacing.sm});
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.55;

  @media (max-width: 899px) {
    line-height: 1.45;
  }
`;

export const Dot = styled.span<{ $color: string }>`
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.02);
  flex-shrink: 0;
  margin-top: 0.35em;
`;

export const ProjectsCarousel = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

export const ProjectsViewport = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 18px;
  margin: -18px;
`;

/* Espaçamento estilo Embla: padding em cada slide + margin negativo no track —
   assim o primeiro e o último também têm “gap” (não só o meio). */
export const ProjectsTrack = styled.div`
  display: flex;
  margin-left: -${({ theme }) => theme.spacing.lg};

  @media (max-width: 899px) {
    margin-left: 0;
  }
`;

export const ProjectSlide = styled.div`
  box-sizing: border-box;
  min-width: 0;
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: ${({ theme }) => theme.spacing.lg};

  @media (min-width: 900px) {
    flex: 0 0 33.333333333333%;
    max-width: 33.333333333333%;
  }
`;

export const ProjectsHeading = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.15;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 899px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 1.12;
  }
`;

export const ProjectsHeader = styled.div`
  margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ProjectsControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const NavButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(15, 23, 42, 0.45);
  color: ${({ theme }) => theme.colors.textPrimary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(15, 23, 42, 0.7);
    border-color: rgba(148, 163, 184, 0.65);
  }
`;
