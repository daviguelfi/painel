import styled, { css } from "styled-components";
import { navTokens } from "@dasa-health/alma-tokens";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

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
  background: #ffffff;
  height: 100vh;
  left: calc(100vw - 755px);
  padding: 20px 36px;
  position: relative;
  width: 683px;
`;

export const BoxTitle = styled.div`
  border-bottom: 1px solid rgba(22, 22, 22, 0.24);
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Close = styled.a`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background ease-in-out 0.3s, color ease-in-out 0.3s;

  svg {
    fill: ${navTokens.ColorTypefaceStrong};
    height: 16px;
    width: 16px;
    transition: fill ease-in-out 0.3s, color ease-in-out 0.3s;
  }

  &:hover {
    cursor: pointer;
    background: ${navTokens.ColorInteractionAccent03};
    transition: background ease-in-out 0.3s, color ease-in-out 0.3s;

    svg {
      fill: ${navTokens.ColorInteractionOnBrandAccent01};
      transition: fill ease-in-out 0.3s, color ease-in-out 0.3s;
    }
  }
`;

export const BoxContent = styled.div`
  padding: 24px 0;
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
