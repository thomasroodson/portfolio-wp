import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LogoImg = styled.img`
  height: 30px;
  width: auto;
`;

export const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;

export const Link = styled.a<{ $active?: boolean }>`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} 0;

  ${({ $active, theme }) =>
    $active &&
    `
    color: ${theme.colors.textPrimary};
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  height: 38px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background: rgba(30, 41, 59, 0.15);

  &:hover {
    border-color: rgba(6, 182, 212, 0.7);
  }
`;
