import { Container } from './styles'

interface Props {
  children: string
}

export function SubTitle({ children }: Props) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Container>{children}</Container>
}
