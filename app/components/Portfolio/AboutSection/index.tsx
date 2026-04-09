import { SectionTitle } from "../SectionTitle";
import { Highlight, themes } from "prism-react-renderer";
import { ABOUT_DEVELOPER_CODE } from "../../../data/about";
import type { AboutSectionProps } from "./types";
import * as S from "./styles";

export type { AboutSectionProps } from "./types";

export function AboutSection({
  title,
  fileLabel,
  descriptionText,
}: AboutSectionProps) {
  const normalizedDescription = descriptionText.trim();
  const code = normalizedDescription || ABOUT_DEVELOPER_CODE;

  return (
    <S.Wrapper id="about">
      <S.Content>
        <SectionTitle>{title}</SectionTitle>
        <S.AboutCard>
          <S.CodeFrame>
            <S.CodeHeader>
              <S.CodeHeaderLeft>
                <S.CodeHeaderLang>JS</S.CodeHeaderLang>
                <S.CodeHeaderFile title={fileLabel}>{fileLabel}</S.CodeHeaderFile>
              </S.CodeHeaderLeft>
              <S.CodeHeaderClose>x</S.CodeHeaderClose>
            </S.CodeHeader>

            <Highlight theme={themes.vsDark} code={code} language="javascript">
              {({
                className,
                style,
                tokens,
                getLineProps,
                getTokenProps,
              }) => (
                <S.CodeBody
                  className={className}
                  style={{ ...style, background: "transparent" }}
                >
                  {tokens.map((line, i) => (
                    <S.CodeLine key={i} {...getLineProps({ line })}>
                      <S.LineNumber>{i + 1}</S.LineNumber>
                      <S.LineContent>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </S.LineContent>
                    </S.CodeLine>
                  ))}
                </S.CodeBody>
              )}
            </Highlight>
          </S.CodeFrame>
        </S.AboutCard>
      </S.Content>
    </S.Wrapper>
  );
}
