import { Navbar } from "../Navbar";
import { Container, Content } from "./styles";

export function Header() {
  return(
    <Container>
      <Navbar />
      <Content>
        <h1>Conteúdo</h1>
      </Content>
    </Container>
  );
}
