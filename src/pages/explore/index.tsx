'use client';

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { 
  IoNavigateOutline, 
  IoSearchOutline, 
  IoStar, 
  IoStarOutline 
} from "react-icons/io5";

import { books } from "./util/books.json"
import { DefaultLayout } from "@/layout/DefaultLayout";
import { Categories } from "@/components/Categories";
import { ModalBook } from "@/components/ModalBook"

import {
  ContentTitle, 
  ContentTag, 
  InputSearch, 
  TextHeader, 
  TextSearch,
  Container,
  ListContent,
  BookCard,
  BookTitle,
  BookSubtitle,
  BookContent,
  RateContainer
} from "./styles";

interface Book {
  id: string
  author: string
  coverURL: string
  name: string
  averageRate: number
}

export default function Explore({ id } : Book){
  const [selectedBook, setSelectedBook] = useState()
  return (
    <>
      <Head>
        <title>Explorar | Book Wise</title>
      </Head>
      <DefaultLayout>
        <Container>
          <ContentTitle>
            <IoNavigateOutline size={32} color="#50B2C0"/>
            <TextHeader>
              Explorar
            </TextHeader>

            <InputSearch>
              <TextSearch>
                Buscar livro ou autor
                </TextSearch>
              <IoSearchOutline size={20} color="#8D95AF"/>
            </InputSearch>
          </ContentTitle>

          <ContentTag>
            <Categories />
          </ContentTag>

          <ListContent>
            {books.map((book) => (
              <ModalBook
                key={book.id}
                bookId={book.id}
                defaultOpen={selectedBook === book.id}
                onOpen={() => setSelectedBook('', book)}
                onClose={() => setSelectedBook('', null)}
              >
                <BookCard key={book.id}>
                  <Image alt="" src={book.cover_url} width={108} height={152}/>
                  <BookContent>
                    <BookTitle>{book.name}</BookTitle>
                    <BookSubtitle>{book.author}</BookSubtitle>
                    <RateContainer>
                      <IoStar size={16} color={'#8381D9'} />
                      <IoStar size={16} color={'#8381D9'} />
                      <IoStar size={16} color={'#8381D9'} />
                      <IoStar size={16} color={'#8381D9'} />
                      <IoStarOutline size={16} color={'#8381D9'} />
                    </RateContainer>
                  </BookContent>
                </BookCard>
              </ModalBook>
            ))}
          </ListContent>
        </Container>
      </DefaultLayout>
    </>
  )
}
