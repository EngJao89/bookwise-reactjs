import Image from "next/image";
import Link from "next/link";
import { 
  IoTrendingUpOutline, 
  IoNavigateOutline, 
  IoLogInOutline
} from "react-icons/io5";

import logoBook1x from "../../../public/sidebarLogo1x.png"
import { 
  Container, 
  ExplorerButton, 
  InitButton, 
  LoginButton, 
  Logo 
} from "./styles";

export function Sidebar(){
  return (
    <Container>
      <Logo>
        <Image 
          alt="logo" 
          src={logoBook1x}
        />
      </Logo>

      <Link href="/" passHref legacyBehavior>
        <InitButton>
          <IoTrendingUpOutline size={24}/>
          Início
        </InitButton>
      </Link>

      <Link href="/explore" passHref legacyBehavior>
        <ExplorerButton>
          <IoNavigateOutline size={24}/>
          Explorar
        </ExplorerButton>
      </Link>

      <Link href="/login" passHref legacyBehavior>
        <LoginButton>
          Fazer Login
          <IoLogInOutline size={24}/>
        </LoginButton>
      </Link>
    </Container>
  )
}
