import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 900px) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const AboutCard = styled.div`
  background: transparent;
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 0;
`;

export const CodeFrame = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(2, 6, 23, 0.2);
`;

export const CodeHeader = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  background: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
`;

export const CodeHeaderLeft = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: rgba(148, 163, 184, 0.95);
  font-family: var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`;

export const CodeHeaderLang = styled.span`
  color: #f7df1e;
  font-weight: 500;
`;

export const CodeHeaderClose = styled.div`
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
  overflow: auto;
`;

export const CodeLine = styled.div`
  display: flex;
`;

export const LineNumber = styled.span`
  width: 3ch;
  flex: 0 0 3ch;
  text-align: right;
  padding-right: ${({ theme }) => theme.spacing.sm};
  user-select: none;
  color: rgba(148, 163, 184, 0.35);
`;

export const LineContent = styled.span`
  flex: 1;
`;
