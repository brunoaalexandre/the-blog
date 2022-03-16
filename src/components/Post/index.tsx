import { Container } from "./styles";

interface PostProps {
  img: string;
  title: string;
  date: string;
  text: string;
}

export function Post({ img, title, date, text }: PostProps) {
  return (
    <Container>
      <header>
        <div>
          <img src={img} alt="" />
        </div>
        <span>{date}</span>
      </header>
      <h1>{title}</h1>
      <p>{text}</p>
    </Container>
  );
}
