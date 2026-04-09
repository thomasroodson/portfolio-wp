import styled from "styled-components";

const MOBILE_MAX = "900px";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;
  z-index: 2;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LogoImg = styled.img`
  height: 30px;
  width: auto;

  @media (max-width: ${MOBILE_MAX}) {
    height: 22px;
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${MOBILE_MAX}) {
    display: none;
  }
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
    text-decoration: none;
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
    text-decoration: none;
    border-color: rgba(6, 182, 212, 0.7);
  }

  @media (max-width: ${MOBILE_MAX}) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(30, 41, 59, 0.35);
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  border: 1px solid rgba(148, 163, 184, 0.25);

  &:hover {
    background: rgba(30, 41, 59, 0.55);
    border-color: rgba(6, 182, 212, 0.45);
  }

  @media (max-width: ${MOBILE_MAX}) {
    display: inline-flex;
  }
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(2px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.28s ease, visibility 0.28s ease;
`;

export const Drawer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: min(320px, 88vw);
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 8px 0 32px rgba(0, 0, 0, 0.35);
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(148, 163, 184, 0.12);
  }
`;

export const DrawerLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.sm};
`;

export const DrawerLink = styled.a<{ $active?: boolean }>`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: color 0.2s ease, background 0.2s ease;

  ${({ $active, theme }) =>
    $active &&
    `
    color: ${theme.colors.textPrimary};
    background: rgba(148, 163, 184, 0.1);
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    background: rgba(148, 163, 184, 0.08);
  }
`;

export const DrawerFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(148, 163, 184, 0.15);
`;

export const DrawerResume = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  height: 44px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background: rgba(30, 41, 59, 0.25);

  &:hover {
    text-decoration: none;
    border-color: rgba(6, 182, 212, 0.7);
  }
`;
