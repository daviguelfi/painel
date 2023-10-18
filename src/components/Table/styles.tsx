import styled, { css } from "styled-components";
import { navTokens } from "@dasa-health/alma-tokens";

interface TableCellProps {
  center?: boolean;
}
interface StatusProps {
  status?: boolean;
}

export const Container = styled.div`
  a {
    color: ${navTokens.ColorInteractionAccent01};
  }
  a:hover {
    color: ${navTokens.ColorInteractionAccent01} !important;
  }
  a:visited {
    color: ${navTokens.ColorInteractionAccent01} !important;
  }
`;

export const TableHead = styled.div`
  border-top: 1px solid rgba(22, 22, 22, 0.24);
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 1fr 1fr 0.5fr;
  padding: 16px 0;
`;

export const TableCellHead = styled.div`
  padding: 0 6px;
`;

export const TableContent = styled.div<TableCellProps>`
  border: 1px solid rgba(22, 22, 22, 0.24);
`;

export const TableLine = styled.div`
  border-bottom: 1px solid rgba(22, 22, 22, 0.24);
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 1fr 1fr 0.5fr;

  &:last-child {
    border-bottom: 0;
  }

  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const TableCell = styled.div<TableCellProps>`
  border-right: 1px solid rgba(22, 22, 22, 0.24);
  padding: 8px;

  ${({ center }) =>
    center === true &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
    `}

  &:last-child {
    border-right: 0;
  }

  button {
    color: ${navTokens.ColorInteractionAccent01};
    text-align: center;
    font-weight: 700;

    &:hover {
      color: ${navTokens.ColorInteractionAccent01};
    }
  }
`;

export const StatusColor = styled.p<StatusProps>`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: ${({ status }) =>
    status === false
      ? navTokens.ColorFeedbackErrorShape
      : navTokens.ColorFeedbackSuccessShape};
  border-radius: 100%;
`;
