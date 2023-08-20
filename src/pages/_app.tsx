import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from "next/image"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import { useRouter } from "next/router"
import { Cart } from "../components/Cart"
import { CartContextProvider } from "../contexts/cartContext"

globalStyles()

export function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          { showCartButton && <Cart /> }
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

export default MyApp
