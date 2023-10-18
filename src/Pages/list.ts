import styled, { css } from "styled-components";
import { navTokens } from "@dasa-health/alma-tokens";
interface TableCellProps {
  center?: boolean;
}

export const Container = styled.div`
  background-color: #ffffff;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  justify-content: space-between;
  padding: 16px 24px;
`;

export const Navigation = styled.div`
  a {
    color: ${navTokens.ColorInteractionAccent01};
  }
  a:hover {
    color: ${navTokens.ColorInteractionAccent01} !important;
    text-decoration: none;
  }
  a:visited {
    color: ${navTokens.ColorInteractionAccent01} !important;
  }
`;
export const HospitalSearch = styled.div``;

export const Main = styled.div`
  padding: 36px 24px;
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
  padding-bottom: 16px;
`;



export const BoxTable = styled.div``;

export const TableHead = styled.div`
  border-top: 1px solid rgba(22, 22, 22, 0.24);
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr 1fr;
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
  grid-template-columns: 4fr 2fr 2fr 1fr 1fr;

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
`;

export const ModalLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ModalContent = styled.div`
  flex-grow: 1;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default Container;