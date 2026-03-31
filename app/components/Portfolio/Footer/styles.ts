import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(148, 163, 184, 0.14);

  @media (max-width: 900px) {
    padding-left: ${({ theme }) => theme.spacing.lg};
    padding-right: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const TopRow = styled.div<{ $alignEnd?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ $alignEnd }) => ($alignEnd ? "flex-end" : "space-between")};
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Tagline = styled.p`
  margin: 0;
  max-width: 36rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(148, 163, 184, 0.1);
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(148, 163, 184, 0.85);
  letter-spacing: 0.01em;
`;
