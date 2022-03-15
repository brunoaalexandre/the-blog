import { Container, Li } from "./styles";

import logoImg from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";

export function Navbar() {
  return(
    <Container>
      <img src={logoImg} alt="The Blog" />
      <nav>
        <ul>
          <Li isActive={true}><a href="#">Home</a></Li>
          <Li isActive={false}><a href="#">Sobre</a></Li>
          <Li isActive={false}><a href="#">Categoria</a></Li>
          <Li isActive={false}><a href="#">Contato</a></Li>
        </ul>
      </nav>
      <form>
        <input placeholder="Buscar" />
        <button>
          <img src={searchIcon} alt="Buscar" />
        </button>
      </form>
    </Container>
  );
}
