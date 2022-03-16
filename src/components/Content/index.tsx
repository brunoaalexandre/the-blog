import { Container, LeftContent, PostContainer, RightContent } from "./styles";

import img01 from "../../assets/img_02.png";
import img03 from "../../assets/img_03.png";
import img04 from "../../assets/img_04.png";
import img05 from "../../assets/img_05.png";
import { Post } from "../Post";

export function Content() {
  return (
    <>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed
            volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
          </p>
        </LeftContent>
        <RightContent>
          <article>
            <span>Janeiro 04, 2022</span>
            <h1>
              Conheça as principais técnicas para conseguir uma vaga
              internacional em programação
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
      <PostContainer>
        <Post
          img={img03}
          title="10 dicas para conseguir a vaga desejada"
          date="Janeiro 04, 2022"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />
        <Post
          img={img04}
          title="Deixe seu código mais semântico com essas dicas"
          date="Janeiro 04, 2022"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
        />
        <Post
          img={img05}
          title="Use essas dicas nas suas aplicações mobile"
          date="Janeiro 04, 2022"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
        />
      </PostContainer>
    </>
  );
}
