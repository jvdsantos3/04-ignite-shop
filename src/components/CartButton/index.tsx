import { useState } from "react"
import { Button, ButtonQuantity } from "./styles"
import { Handbag } from "phosphor-react"

export function CartButton() {
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      {
        quantity > 0 
        ? 
        <ButtonQuantity>
          <Handbag size={24} />

          <div><span>{quantity}</span></div>
        </ButtonQuantity> 
        : 
        <Button>
          <Handbag size={24} />
        </Button>
      }
    </>
  )
}