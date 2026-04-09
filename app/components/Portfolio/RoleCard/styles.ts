import styled from "styled-components";

export const Card = styled.section`
  width: 100%;
  margin-top: 86px;
  background: rgba(30, 41, 59, 0.35);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow:
    0 0 0 1px rgba(148, 163, 184, 0.15),
    0 40px 120px rgba(0, 0, 0, 0.35);

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const BracesIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(79, 70, 229, 0.15);
  border: 1px solid rgba(79, 70, 229, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 900;
  font-size: 14px;
`;

export const Title = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 899px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.15;
  }
`;

export const Subtext = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.7;

  @media (max-width: 899px) {
    line-height: 1.55;
  }
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Tag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: rgba(248, 250, 252, 0.9);
  background: rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.18);
  padding: 6px 10px;
  border-radius: 999px;
`;
