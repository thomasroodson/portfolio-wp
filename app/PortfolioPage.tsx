"use client";

import styled from "styled-components";
import { NavBar } from "./components/Portfolio/NavBar";
import { Hero } from "./components/Portfolio/Hero";
import { AboutSection } from "./components/Portfolio/AboutSection";
import { ExpertiseSection } from "./components/Portfolio/ExpertiseSection";
import { Footer } from "./components/Portfolio/Footer";
import type { AboutSectionProps } from "./components/Portfolio/AboutSection";
import type { ExpertiseSectionProps } from "./components/Portfolio/ExpertiseSection";
import type { FooterProps } from "./components/Portfolio/Footer";
import type { NavBarProps } from "./components/Portfolio/NavBar";
import type { HeroProps } from "./components/Portfolio/Hero";

const Shell = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #000;
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    left: -220px;
    top: 120px;
    width: 560px;
    height: 560px;
    background: transparent;
    filter: none;
    opacity: 0.9;
  }

  &::after {
    content: "";
    position: absolute;
    left: -160px;
    top: 470px;
    width: 520px;
    height: 520px;
    background: transparent;
    filter: none;
    opacity: 0.65;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
`;
export function PortfolioPage({
  navBar,
  hero,
  about,
  expertise,
  footer,
}: {
  navBar?: NavBarProps;
  hero?: HeroProps;
  about: AboutSectionProps;
  expertise: ExpertiseSectionProps;
  footer: FooterProps;
}) {
  return (
    <Shell>
      <Glow />
      <Inner>
        <NavBar {...(navBar ?? {})} />
        <Hero {...(hero ?? {})} />
        <AboutSection {...about} />
        <ExpertiseSection {...expertise} />
        <Footer {...footer} />
      </Inner>
    </Shell>
  );
}

