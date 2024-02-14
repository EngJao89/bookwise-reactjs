import { ReactNode } from "react"
import { Container, Content } from "./styles"
import { Sidebar } from "@/components/Sidebar"

interface DefaultLayoutProps {
  children: ReactNode | ReactNode[]
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  )
}
