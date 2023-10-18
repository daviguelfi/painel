import styled, { css } from "styled-components";
import { navTokens } from "@dasa-health/alma-tokens";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  position: fixed;
  height: 444px;
  width: 550px;
  left: calc(100vw - 65vw);
  z-index: 9999;
  border-radius: 8px;
  box-shadow: 0px 12px 12px rgba(22, 22, 22, 0.04),
    0px 24px 56px rgba(22, 22, 22, 0.08);

  ${({ isOpen }) =>
    isOpen === true
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export const Box = styled.div`
  background: ${navTokens.ColorNeutral00};
  height: 444px;
  width: 550px;
  padding: 32px 0px;
  gap: 16px
  position: relative;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
}
`;

export const Close = styled.a`
  padding: 16px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background ease-in-out 0.3s, color ease-in-out 0.3s;

  svg {
    fill: ${navTokens.ColorInteractionBlend07};
    height: 16px;
    width: 16px;
    transition: fill ease-in-out 0.3s, color ease-in-out 0.3s;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const BoxContent = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
