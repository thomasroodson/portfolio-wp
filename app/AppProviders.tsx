"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import StyledComponentsRegistry from "./StyledComponentsRegistry";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

