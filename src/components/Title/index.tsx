import { Container } from "./styles";

interface Props {
  children: string;
  type: "title" | "tableTitle";
}

export function Title({ children, type }: Props) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Container type={type}>{children}</Container>;
}
