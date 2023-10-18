import styled from "styled-components";
import { navTokens } from "@dasa-health/alma-tokens";

export const Container = styled.div`
  background-color: #ffffff;
`;

export const PatientDetailsContainer = styled.div`
  flex-grow: 2;
  border-right: 1px solid ${navTokens.ColorNeutral30};
  padding-right: 24px;
  min-width: 500px;
`;

export const CheckDetailsContainer = styled.div`
  flex-grow: 2;
`;

export const DetailsTitle = styled.p`
  color: ${navTokens.ColorTypefaceStrong};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  justify-content: space-between;
  padding: 16px 24px;
`;

export const Navigation = styled.div``;
export const HospitalSearch = styled.div``;

export const Main = styled.div`
  padding: 36px 24px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const BoxContent = styled.div`
  padding: 24px 0;
`;

export const TableHead = styled.div`
  border-top: 1px solid rgba(22, 22, 22, 0.24);
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr 1fr;
  padding: 16px 0;
`;

export const ModalLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PatientDetailsInfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const ModalContent = styled.div`
  flex-grow: 1;
  min-widht: 50%;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;

  > img {
    margin-bottom: 32px;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  back-ground: red;
  gap: 4px;
  align-items: center;
  align-item: center;
  margin-top: 48px;
`;

export const TitleModal = styled.p`
  color: ${navTokens.ColorTypefaceStrong};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 133%;
  width: 282px;
  height: 32px;
`;

export const SubTitleModal = styled.p`
  width: 482px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  color: ${navTokens.ColorTypefaceSmooth};
`;

export const SwitchBox = styled.div`
  margin-top: 16px;

  input {
    background-color: ${navTokens.ColorInteractionSelectDefault} !important;
  }

  input:checked {
    background-color: ${navTokens.ColorInteractionSelectActive} !important;
  }

  &:last-child {
    border-bottom: 24px;
  }
`;

export const TextAreaContainer = styled.div`
  margin-top: 24px;
  width: 651px;
  height: 56px;
  background: ${navTokens.ColorInteractionBlend01};
  box-shadow: inset 0px -1px 0px #4b4b4b;
  border-radius: 4px 4px 0px 0px;
`;
