import Image from "next/image"

import backgroundImg from "../../../public/hero.png";
import logoGoogle from "../../../public/logos_google-icon.svg";
import logoGitHub from "../../../public/akar-icons_github-fill.svg";
import logoRocket from "../../../public/RocketLaunch.svg";

import { 
  CardLogin,
  LoginContainer,  
  MainSection, 
  SubTitleSection
} from "./styles"
import Link from "next/link";

export default function Login(){
  return (
    <LoginContainer>
      <Image alt="Logo" src={backgroundImg}/>

      <MainSection>
        Boas vindas!
        <SubTitleSection>
          Faça seu login ou acesse como visitante.
        </SubTitleSection>
        <CardLogin>
          <Image alt="Google" src={logoGoogle}/>
          Entrar com Google
        </CardLogin>
        <CardLogin>
          <Image alt="GitHub" src={logoGitHub}/>
          Entrar com GitHub
        </CardLogin>

        <Link href="/" passHref legacyBehavior>
          <CardLogin>
            <Image alt="Rocket" src={logoRocket}/>
            Acessar como visitante
          </CardLogin>
        </Link>
      </MainSection>
    </LoginContainer>
  )
}
