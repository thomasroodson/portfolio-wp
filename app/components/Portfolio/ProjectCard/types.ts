export type ProjectCardProps = {
  imageUrl: string;
  title: string;
  details: string;
  ctaLabel: string;
  /** Link interno (ex.: `/projects/slug`) quando o card vem do WordPress. */
  href?: string;
};
