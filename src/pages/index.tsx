import Head from "next/head";
import { IoTrendingUpOutline } from "react-icons/io5";

import { CardComment } from "@/components/CardComment";
import { TrendingBooks } from "@/components/TrendingBooks";
import { 
  Container, 
  ContainerHeader, 
  ContainerTrend, 
  ContentBook, 
  TextHeader, 
  TextSubtitle 
} from "./styles";
import { DefaultLayout } from "@/layout/DefaultLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Book Wise</title>
      </Head>

      <DefaultLayout>
        <Container>

          <ContainerTrend>
            <TrendingBooks />
          </ContainerTrend>

          <ContentBook>
            <ContainerHeader>
              <TextHeader>
                <IoTrendingUpOutline 
                  size={28}
                  color="#50B2C0"
                  style={{ paddingRight: 10 }}
                />
                Início
              </TextHeader>
            </ContainerHeader>

            <TextSubtitle>
              Avaliações mais recentes
            </TextSubtitle>

            <CardComment />
          </ContentBook>
        </Container>
      </DefaultLayout>
    </>
  )
}
