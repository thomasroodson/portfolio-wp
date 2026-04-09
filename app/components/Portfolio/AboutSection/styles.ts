import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  /* Hero usa margens negativas; no mobile o bloco sobe e cobre o texto da hero. */
  @media (max-width: 899px) {
    margin-top: 0;
    padding: 0 ${({ theme }) => theme.spacing.lg};
    padding-top: clamp(120px, 28vw, 200px);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  min-width: 0;

  @media (max-width: 899px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const AboutCard = styled.div`
  background: transparent;
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 0;
  min-width: 0;

  @media (max-width: 899px) {
    width: 100%;
  }
`;

export const CodeFrame = styled.div`
  width: 100%;
  min-width: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(2, 6, 23, 0.2);

  @media (max-width: 899px) {
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

export const CodeHeader = styled.div`
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 6px ${({ theme }) => theme.spacing.sm};
  background: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);

  @media (max-width: 899px) {
    padding: 8px 12px;
  }
`;

export const CodeHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: rgba(148, 163, 184, 0.95);
  font-family: var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  @media (max-width: 899px) {
    font-size: 14px;
    line-height: 1.25;
  }
`;

export const CodeHeaderFile = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CodeHeaderLang = styled.span`
  flex-shrink: 0;
  color: #f7df1e;
  font-weight: 500;
`;

export const CodeHeaderClose = styled.div`
  flex-shrink: 0;
  color: rgba(148, 163, 184, 0.7);
  font-size: 12px;
  line-height: 1;
`;

export const CodeBody = styled.pre`
  margin: 0;
  padding: 12px ${({ theme }) => theme.spacing.sm};
  background: rgba(2, 6, 23, 0.72) !important;
  font-family: var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.55;
  /* Prism aplica white-space no style inline; quebra dentro do card (web e mobile). */
  white-space: pre-wrap !important;
  word-break: break-word;
  overflow-wrap: anywhere;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 899px) {
    padding: 10px 12px;
    font-size: 13px;
    line-height: 1.6;
  }
`;

export const CodeLine = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 0;
  width: 100%;
`;

export const LineNumber = styled.span`
  box-sizing: border-box;
  flex: 0 0 4ch;
  width: 4ch;
  min-width: 4ch;
  flex-shrink: 0;
  /* Herdamos word-break do pre; evita partir "10" em "1" + "0". */
  white-space: nowrap;
  word-break: normal;
  overflow-wrap: normal;
  font-variant-numeric: tabular-nums;
  text-align: right;
  padding-right: ${({ theme }) => theme.spacing.sm};
  user-select: none;
  color: rgba(148, 163, 184, 0.35);

  @media (max-width: 899px) {
    flex-basis: 4ch;
    width: 4ch;
    min-width: 4ch;
    padding-right: 10px;
    font-size: 12px;
  }
`;

export const LineContent = styled.span`
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
`;
