import { styled } from "@stitches/react";
import { relative } from "path";

export const Button = styled('button', {
  border: 0,
  borderRadius: 6,
  padding: '0.625rem 0.75rem',
  position: 'relative',

  background: '$gray800',
  color: '$gray500',

  cursor: 'pointer',
})

export const ButtonQuantity = styled(Button, {
  color: '$gray300',

  div: {
    display: 'flex',
    width: 24,
    height: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,

    position: 'absolute',
    right: -7,
    top: -7,

    borderRadius: 9999,
    border: '3px solid $gray900',
    background: '$green500',

    color: '$white',
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: 700,
  }
})