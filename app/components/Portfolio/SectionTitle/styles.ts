import styled from "styled-components";

export const Title = styled.h3<{ $size?: "sm" | "md" }>`
  margin: 0;
  font-size: ${({ theme, $size }) =>
    $size === "sm" ? theme.fontSize.lg : theme.fontSize.lg};
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  opacity: 0.95;
`;

export const Rule = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(148, 163, 184, 0.35);
  margin-top: ${({ theme }) => theme.spacing.sm};
`;
