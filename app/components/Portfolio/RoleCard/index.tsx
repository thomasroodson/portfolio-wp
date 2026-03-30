import { Code2 } from "lucide-react";
import * as S from "./styles";

export type { RoleCardProps } from "./types";

export function RoleCard() {
  return (
    <S.Card id="skills">
      <S.Header>
        <S.BracesIcon aria-hidden="true">
          <Code2 size={16} strokeWidth={2} />
        </S.BracesIcon>
        <S.Title>Full-Stack Developer</S.Title>
      </S.Header>
      <S.Subtext>
        Building production-grade applications with modern technical foundations, focusing on both frontend
        and backend.
      </S.Subtext>
      <S.TagsRow>
        <S.Tag>React</S.Tag>
        <S.Tag>TypeScript</S.Tag>
        <S.Tag>Next.js</S.Tag>
        <S.Tag>Node.js</S.Tag>
        <S.Tag>PostgreSQL</S.Tag>
        <S.Tag>REST API</S.Tag>
        <S.Tag>GraphQL</S.Tag>
        <S.Tag>Auth</S.Tag>
        <S.Tag>Automation</S.Tag>
      </S.TagsRow>
    </S.Card>
  );
}
