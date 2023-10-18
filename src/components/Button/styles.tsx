import styled, { css } from "styled-components";
import { navTokens } from "@dasa-health/alma-tokens";

interface Props {
  current?: boolean;
  action?: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  font-family: Dasa Sans, sans-serif;
  background: ${({ current }) =>
    current ? navTokens.ColorInteractionSelectActive : "transparent"};
  border-radius: 4px;
  border: 0;
  color: ${({ current }) =>
    current ? "#FEFEFE" : navTokens.ColorInteractionSelectDefault};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  padding: 8px 12px;
  transition: background ease-in-out 0.3s, color ease-in-out 0.3s;

  svg {
    fill: ${navTokens.ColorInteractionSelectDefault};
    height: 14px;
    transition: fill ease-in-out 0.3s;
    width: 14px;
  }

  &:disabled {
    background: ${navTokens.ColorInteractionBlend04};

    &:hover {
      background: ${navTokens.ColorInteractionBlend04};
      color: ${navTokens.ColorInteractionSelectDefault};
    }
  }

  &:hover {
    background: ${navTokens.ColorInteractionSelectActive};
    color: #fefefe;
    transition: background ease-in-out 0.3s, color ease-in-out 0.3s;

    svg {
      fill: #fefefe;
      transition: fill ease-in-out 0.3s;
    }
  }

  ${({ action }) =>
    action === true &&
    css`
      margin: 0 auto;

      svg {
        fill: ${navTokens.ColorInteractionSelectDefault};
        height: 20px;
        width: auto;
      }

      &:hover {
        background: transparent;

        svg {
          fill: ${navTokens.ColorInteractionSelectActive};
        }
      }
    `}
`;
