import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from "next/image"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import { CartButton } from "../components/CartButton"


globalStyles()

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <CartButton />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
