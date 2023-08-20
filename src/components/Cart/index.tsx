import * as Dialog from '@radix-ui/react-dialog';
import { Button, CartClose, CartContent, ItemsContent, ItemsQuatity, ItemsResume, ItemsTotal } from './styles';
import { X } from 'phosphor-react';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/useCart';

export function Cart() {
  const { cartQuantity } = useCart()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={cartQuantity} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight='bold' />
          </CartClose>

          <h2>Sacola de compras</h2>

          <ItemsContent>
            <p>Opss, parece que o seu carrinho está vazio.</p>
          </ItemsContent>

          <ItemsResume>
            <ItemsQuatity>
              Quantidade

              <span>3 itens</span>
            </ItemsQuatity>

            <ItemsTotal>
              Valor total

              <span>R$ 270,00</span>
            </ItemsTotal>

            <Button>
              Finalizar compra
            </Button>
          </ItemsResume>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}