import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: "3rem",
  paddingTop: "4.5rem",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",

  h2: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: '2rem',
    marginBottom: '2rem',
  }
});

export const CartClose = styled(Dialog.Close, {
  position: 'fixed',
  top: '1.5rem',
  right: '1.5rem',
  color: '$gray500',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
});

export const ItemsContent = styled('section', {
  flex: 1,
})

export const ItemsResume = styled('footer', {
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 3,
  }
})

export const ItemsQuatity = styled('div', {
  color: '$gray100',
  lineHeight: '160%',

  span: {
    color: '$gray300',
    fontSize: '1.125rem',
  }
})

export const ItemsTotal = styled('div', {
  color: '$gray100',
  lineHeight: '160%',
  fontSize: '1.125rem',
  fontWeight: 'bold',

  span: {
    fontSize: '1.5rem',
    lineHeight: '140%',
  }
})

export const Button = styled('button', {
  marginTop: '3.4rem',
  width: '100%',
  padding: '1.25rem 0',
  color: '$white',
  fontSize: '1.125rem',
  fontWeight: 'bold',
  lineHeight: '160%',
  background: '$green500',
  border: 0,
  borderRadius: 8,
  cursor: 'pointer',

  '&:hover': {
    background: '$green300',
  }
})