import Image from "next/image";
import { IoStar, IoStarOutline, IoChevronForward } from "react-icons/io5";

import BookGO from "../../../public/books/book-george-orwell.png"
import BookZR from "../../../public/books/book-zeno-rocha.png"
import BookIA from "../../../public/books/book-isaac-asimov.png"
import BookAB from "../../../public/books/book-aditya-bhargava.png"
import { 
  BookAuthor, 
  CardBook, 
  CardBookTitle, 
  Container, 
  HeaderTitle, 
  Rating, 
  SeeButton, 
  Title 
} from "./styles";

export function TrendingBooks() {
  return (
    <Container>
      <HeaderTitle>
        <Title>Livros populares</Title>
        <SeeButton>
          Ver Mais
          <IoChevronForward size={16} color={'#8381D9'} />
        </SeeButton>
      </HeaderTitle>
      <CardBook>
        <Image alt="BookGO" src={BookGO} />
        <CardBookTitle>
          A revolução dos bichos
          <BookAuthor>
            George Orwell
          </BookAuthor>

          <Rating>
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStarOutline size={16} color={'#8381D9'} />
          </Rating>
        </CardBookTitle>
      </CardBook>

      <CardBook>
        <Image alt="BookZR" src={BookZR} />
        <CardBookTitle>
          14 Hábitos de Desenvolvedores Alta...
          <BookAuthor>
            Zeno Rocha
          </BookAuthor>

          <Rating>
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStarOutline size={16} color={'#8381D9'} />
          </Rating>
        </CardBookTitle>
      </CardBook>

      <CardBook>
        <Image alt="BookIA" src={BookIA} />
        <CardBookTitle>
          O Fim da Eternidade
          <BookAuthor>
            Isaac Asimov
          </BookAuthor>

          <Rating>
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStarOutline size={16} color={'#8381D9'} />
          </Rating>
        </CardBookTitle>
      </CardBook>

      <CardBook>
        <Image alt="BookAB" src={BookAB} />
        <CardBookTitle>
          Entendendo Algoritmos
          <BookAuthor>
            Aditya Bhargava
          </BookAuthor>

          <Rating>
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStar size={16} color={'#8381D9'} />
            <IoStarOutline size={16} color={'#8381D9'} />
          </Rating>
        </CardBookTitle>
      </CardBook>
    </Container>
  )
}
