import styled from "styled-components";

export const Outer = styled.section<{ $bgUrl?: string | null }>`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  margin-bottom: -290px;

  background-color: #000;
  background-image: ${({ $bgUrl }) =>
    $bgUrl ? `url(${$bgUrl})` : "url(/bg_hero_thomasroodson.jpg)"};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top -30px;
`;

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: -85px auto -120px auto;
  padding: ${({ theme }) => theme.spacing.xl};
  min-height: calc(75vh - 100px);

  display: grid;
  grid-auto-flow: column;
  align-content: center;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 900px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  }
`;

export const Kicker = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.7;
  max-width: 680px;
`;

export const SocialRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;
