import styled from "styled-components";

export const IconButton = styled.a`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(148, 163, 184, 0.25);
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  background: rgba(30, 41, 59, 0.25);

  &:hover {
    border-color: rgba(6, 182, 212, 0.7);
  }
`;
