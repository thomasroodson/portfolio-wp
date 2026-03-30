import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme?.colors?.background ?? "#0F172A"};
    color: ${({ theme }) => theme?.colors?.textPrimary ?? "#F8FAFC"};
    font-family: var(--font-jetbrains-mono, ui-monospace), ui-monospace,
      SFMono-Regular, Menlo,
      Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    line-height: 1.5;
  }

  a {
    color: ${({ theme }) => theme?.colors?.primary ?? "#4F46E5"};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme?.colors?.secondary ?? "#06B6D4"};
    outline-offset: 2px;
  }
`;

