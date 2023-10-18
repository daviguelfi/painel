import styled from "styled-components";
import { navTokens } from "@dasa-health/alma-tokens";

interface Props {
  type: "tableTitle" | "title";
}

export const Container = styled.p<Props>`
  font-size: 14px;
  line-height: 17px;
  font-weight: ${({ type }) => (type === "title" ? "700" : "500")};
  color: ${({ type }) =>
    type === "title"
      ? navTokens.ColorTypefaceStrong
      : navTokens.ColorInteractionSelectDefault};
`;
