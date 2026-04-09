export interface FooterNavLink {
  label: string;
  url: string;
}

export interface FooterProps {
  /** Nome exibido ao lado do logo (ex.: título do site no WP). */
  brandName: string;
  logoSrc?: string | null;
  /** Mesmos links da navbar para consistência. */
  navLinks: FooterNavLink[];
  /** Linha legal opcional abaixo dos ícones (SITE-DESIGN: texto secundário discreto). */
  copyright?: string;
  facebookHref?: string;
  instagramHref?: string;
  githubHref?: string;
  linkedinHref?: string;
}
