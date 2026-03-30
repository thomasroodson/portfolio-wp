export const theme = {
  colors: {
    primary: "#4F46E5",
    secondary: "#06B6D4",
    background: "#0F172A",
    surface: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
  },
  fontSize: {
    xs: "16px",
    sm: "20px",
    md: "24px",
    lg: "28px",
    xl: "36px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
} as const;

export type Theme = typeof theme;

