import Link from "next/link";
import styled from "styled-components";

export const Card = styled.article<{ $imageUrl: string }>`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  height: 320px;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: flex-end;
  transform-origin: center;
  isolation: isolate;
  transition:
    transform 260ms ease,
    box-shadow 260ms ease;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    /* Margem negativa evita borda clara no blur */
    inset: -14px;
    background-image: url(${({ $imageUrl }) => $imageUrl});
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    filter: blur(3px);
    transform: scale(1.06);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(2, 6, 23, 0.05) 16%,
      rgba(2, 6, 23, 0.78) 72%
    );
  }

  box-shadow:
    0 0 0 1px rgba(148, 163, 184, 0.22),
    0 20px 80px rgba(2, 6, 23, 0.55);

  &:hover {
    transform: scale(1.1);
    box-shadow:
      0 0 0 1px rgba(148, 163, 184, 0.28),
      0 28px 100px rgba(2, 6, 23, 0.72);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Title = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: clamp(24px, 2.5vw, 44px);
  line-height: 1.05;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 899px) {
    font-size: clamp(17px, 4.8vw, 28px);
    line-height: 1;
  }
`;

export const Details = styled.p`
  margin: 0;
  color: rgba(248, 250, 252, 0.9);
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 899px) {
    line-height: 1.4;
  }
`;

export const ActionRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ctaBase = `
  border: 1px solid rgba(248, 250, 252, 0.6);
  background: rgba(2, 6, 23, 0.5);
  color: inherit;
  font-weight: 700;
  font-size: 16px;
  border-radius: 999px;
  padding: 11px 24px;
  cursor: pointer;
  transition: background-color 200ms ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(2, 6, 23, 0.75);
  }
`;

export const CtaButton = styled.button`
  ${ctaBase}
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CtaLink = styled(Link)`
  ${ctaBase}
  color: ${({ theme }) => theme.colors.textPrimary};
`;
