import { Navbar } from "../Navbar";
import { Container, Content } from "./styles";

import articleImg from "../../assets/img_01.png";
import arrowRightIcon from "../../assets/arrow-right.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <Navbar />
        <article>
          <div>
            <h1>
              Veja o guia definitivo para conquistar seus objetivos como DEV em
              2022
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique placerat hac.{" "}
            </p>
            <span>
              Veja mais
              <img src={arrowRightIcon} alt="Veja mais" />
            </span>
          </div>
          <div>
            <img
              src={articleImg}
              alt="Veja o guia definitivo para conquistar seus objetivos como DEV em 2022"
            />
          </div>
        </article>
      </Content>
    </Container>
  );
}
