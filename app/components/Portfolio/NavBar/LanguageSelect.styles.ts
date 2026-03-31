import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 28px;
  padding: 4px 8px 4px 6px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  background: rgba(30, 41, 59, 0.15);
  cursor: pointer;

  &:hover {
    border-color: rgba(6, 182, 212, 0.7);
  }

  &:focus-visible {
    outline: 2px solid rgba(6, 182, 212, 0.6);
    outline-offset: 2px;
  }
`;

export const FlagImg = styled.img`
  width: 14px;
  height: 14px;
  object-fit: cover;
  border-radius: 1px;
  flex-shrink: 0;
`;

export const Chevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  color: #94a3b8;
  transition: transform 0.15s ease;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0")});

  svg {
    display: block;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 50;
  margin: 0;
  padding: 4px;
  list-style: none;
  width: 96px;
  min-width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
`;

export const MenuItem = styled.li`
  margin: 0;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 8px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: rgba(148, 163, 184, 0.12);
  }

  &:focus-visible {
    outline: 2px solid rgba(6, 182, 212, 0.6);
    outline-offset: 0;
  }
`;
