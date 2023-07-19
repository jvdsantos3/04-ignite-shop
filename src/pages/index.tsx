import { GetStaticProps } from "next"
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product, ProductInfo } from "../styles/pages/home"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"

import 'keen-slider/keen-slider.min.css'
import Link from "next/link"
import Head from "next/head"
import { Handbag } from "phosphor-react"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map(product => {
            return (
              <Product key={product.id} className="keen-slider__slide">
                <Link href={`/product/${product.id}`} prefetch={false} >
                  <Image src={product.imageUrl} width={520} height={480} alt="" />
                </Link>
        
                <footer>
                  <ProductInfo>
                    <strong>{ product.name }</strong>
                    <span>{ product.price }</span>
                  </ProductInfo>

                  <button>
                    <Handbag size={32} onClick={() => {console.log('clickei')}} />
                  </button>
                </footer>
              </Product>
            )
          })
        }
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2. // 2 hours
  }
}