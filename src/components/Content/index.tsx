import { Container, LeftContent, RightContent } from "./styles";

import img01 from "../../assets/img_02.png";

export function Content() {
  return (
    <Container>
      <LeftContent>
        <header>
          <div>
            <img src={img01} alt="Começando em ReactJS em 2022" />
          </div>
          <span>Janeiro 04, 2022</span>
        </header>
        <h1>Começando em ReactJS em 2022</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
          aenean sit vitae, sed tristique. Sed volutpat aenean.
        </p>
      </LeftContent>
      <RightContent>
        <article>
          <span>Janeiro 04, 2022</span>
          <h1>
            Conheça as principais técnicas para conseguir uma vaga internacional
            em programação
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique.
          </p>
        </article>
        <article>
          <span>Janeiro 04, 2022</span>
          <h1>Veja a evolução do Front-end na prática</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque.
          </p>
        </article>
      </RightContent>
    </Container>
  );
}
