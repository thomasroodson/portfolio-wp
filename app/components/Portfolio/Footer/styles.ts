import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 900px) {
    padding-left: ${({ theme }) => theme.spacing.sm};
    padding-right: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Panel = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.background};
`;

export const BrandRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LogoMark = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    #7c3aed 50%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1;
`;

export const LogoImg = styled.img`
  width: 196px;
  height: 72px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radius.md};
  display: block;
`;

export const BrandName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.15s ease, opacity 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 3px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

export const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  background: transparent;
  transition:
    color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px;
  }

  svg {
    flex-shrink: 0;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;
