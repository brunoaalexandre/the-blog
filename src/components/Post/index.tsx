import { Container } from "./styles";

import img01 from "../../assets/img_01.png";

export function Post() {
  return (
    <Container>
      <header>
        <div>
          <img src={img01} alt="10 dicas para conseguir a vaga desejada" />
        </div>
        <span>Janeiro 04, 2022</span>
      </header>
      <h1>10 dicas para conseguir a vaga desejada</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique.
      </p>
    </Container>
  );
}
