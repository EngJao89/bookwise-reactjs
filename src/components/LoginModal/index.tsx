import Image from "next/image"
import { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

import logoGoogle from "../../../public/logos_google-icon.svg";
import logoGitHub from "../../../public/akar-icons_github-fill.svg";
import { 
  CardLogin, 
  DialogClose, 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogRoot, 
  DialogTitle, 
  DialogTrigger 
} from "./styles";

interface LoginModalProps {
  children: ReactNode | ReactNode[]
}

export function LoginModal({ children }: LoginModalProps){
  return (
    <DialogRoot>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <IoCloseOutline size={24} color="#8D95AF"/>
          </DialogClose>

          <DialogTitle>
            Faça login para deixar sua avaliação
          </DialogTitle>

          <CardLogin>
            <Image alt="Google" src={logoGoogle}/>
            Entrar com Google
          </CardLogin>
          <CardLogin>
            <Image alt="GitHub" src={logoGitHub}/>
            Entrar com GitHub
          </CardLogin>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}
