import { ReactNode, useState } from "react"
import Image from "next/image"
import { DialogContentProps } from "@radix-ui/react-dialog"
import { 
  IoBookOutline, 
  IoBookmarkOutline, 
  IoStar, 
  IoStarOutline, 
  IoCloseOutline
} from "react-icons/io5";

import Avatar from "../../../public/Avatar.png";

import { 
  BookAbout,
  BookContent, 
  BookInfo, 
  BookSection, 
  BookStats, 
  BookSubtitle, 
  BookTitle, 
  DialogClose, 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogRoot, 
  DialogTrigger, 
  EvaluateButton, 
  EvaluateCard, 
  EvaluateContent, 
  EvaluateDate, 
  EvaluateHeader, 
  EvaluateText, 
  EvaluateTitles, 
  EvaluateUser, 
  RateContainer,
  StatusContent,
  StatusSubtitles
} from "./styles"

import bookImage from "../../../public/book-list/14-habitos-de-desenvolvedores-altamente-produtivos.svg"
import { LoginModal } from "../LoginModal";

interface Book {
  name: string
  author: string
  coverURL: string
  totalPages: number
  categories: string[]
  ratings: {
    id: string
    rate: number
    description: string
    createdAt: string
    user: {
      id: string
      avatarURL: string
      name: string
    }
  }[]
}

interface BookDrawerContentProps extends DialogContentProps {
  bookId: string
  children: ReactNode | ReactNode[]
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export function ModalBook({
  bookId,
  children,
  defaultOpen,
  onOpen,
  onClose,
}: BookDrawerContentProps){
  const [isOpen, setIsOpen] = useState(defaultOpen)

  function handleOpenChange(open: boolean) {
    setIsOpen(open)

    if (typeof onClose !== 'undefined' && !open) {
      onClose()
    }

    if (typeof onOpen !== 'undefined' && open) {
      onOpen()
    }
  }
  return(
    <DialogRoot open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogPortal>
          <DialogOverlay />

          <DialogContent>
            <DialogClose>
              <IoCloseOutline size={24} color="#8D95AF"/>
            </DialogClose>

            <BookSection>
              <BookContent>
                <Image 
                  alt="Book Image" 
                  src={bookImage}
                  width={172}
                  height={242}
                />
                <BookInfo>
                  <BookTitle>
                    14 Hábitos de Desenvolvedores Altamente Produtivos
                  </BookTitle>
                  <BookSubtitle>Zeno Rocha</BookSubtitle>

                  <RateContainer>
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStar size={16} color={'#8381D9'} />
                    <IoStarOutline size={16} color={'#8381D9'} />
                  </RateContainer>
                  <BookSubtitle>3 avaliações</BookSubtitle>
                </BookInfo>
              </BookContent>

              <BookAbout>
                <StatusContent>
                  <BookStats>
                    <IoBookmarkOutline size={24} color="#50B2C0"/>
                    Categoria
                    <StatusSubtitles>Computação, educação</StatusSubtitles>
                  </BookStats>
                </StatusContent>

                <StatusContent>
                  <BookStats>
                    <IoBookOutline size={24} color="#50B2C0"/>
                      Páginas
                    <StatusSubtitles>160</StatusSubtitles>
                  </BookStats>
                </StatusContent>
              </BookAbout>
            </BookSection>

            <EvaluateContent>
              <LoginModal>
                <EvaluateTitles>
                  Avaliar
                </EvaluateTitles>
              </LoginModal>
              <EvaluateButton>Avaliações</EvaluateButton>
            </EvaluateContent>

            <EvaluateCard>
              <EvaluateHeader>
                <Image alt="Avatar" src={Avatar}/>
                <EvaluateUser>Brandon Botosh</EvaluateUser>
                <EvaluateDate>Há 2 dias</EvaluateDate>

                <RateContainer>
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStarOutline size={16} color={'#8381D9'} />
                </RateContainer>
              </EvaluateHeader>
              <EvaluateText>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. 
                Penatibus id vestibulum imperdiet a at imperdiet lectus leo. 
                Sit porta eget nec vitae sit vulputate eget
              </EvaluateText>
            </EvaluateCard>

            <EvaluateCard>
              <EvaluateHeader>
                <Image alt="Avatar" src={Avatar}/>
                <EvaluateUser>Brandon Botosh</EvaluateUser>
                <EvaluateDate>Há 4 meses</EvaluateDate>

                <RateContainer>
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStarOutline size={16} color={'#8381D9'} />
                </RateContainer>
              </EvaluateHeader>
              <EvaluateText>
                Nec tempor nunc in egestas. 
              </EvaluateText>
            </EvaluateCard>

            <EvaluateCard>
              <EvaluateHeader>
                <Image alt="Avatar" src={Avatar}/>
                <EvaluateUser>Brandon Botosh</EvaluateUser>
                <EvaluateDate>Há 4 meses</EvaluateDate>

                <RateContainer>
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStar size={16} color={'#8381D9'} />
                  <IoStarOutline size={16} color={'#8381D9'} />
                </RateContainer>
              </EvaluateHeader>
              <EvaluateText>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. 
                Penatibus id vestibulum imperdiet a at imperdiet lectus leo. 
                Sit porta eget nec vitae sit vulputate eget 
              </EvaluateText>
            </EvaluateCard>
          </DialogContent>
        </DialogPortal>
    </DialogRoot>
  )
}
