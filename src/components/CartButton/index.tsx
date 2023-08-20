import { ComponentProps, useState } from "react"
import { Button, ButtonQuantity } from "./styles"
import { Handbag } from "phosphor-react"

type CartButtonProps = ComponentProps<typeof Button> & {
  quantity?: number;
};

export function CartButton({ quantity, ...rest }: CartButtonProps) {
  return (
    <>
      {
        quantity > 0 
        ? 
        <ButtonQuantity {...rest}>
          <Handbag size={24} />

          <div><span>{quantity}</span></div>
        </ButtonQuantity> 
        : 
        <Button {...rest}>
          <Handbag size={24} />
        </Button>
      }
    </>
  )
}