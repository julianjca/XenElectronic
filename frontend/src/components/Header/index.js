import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

import CartIcon from '../CartIcon'
import { StyledHeader, Logo, Flex, CartWrapper } from './styles'
import { Container } from '../Shared'
import { useCartState } from '../../context'

const Header = () => {
  const state = useCartState()

  const handleRedirectToCart = () => {
    Router.push('/cart')
  }

  return (
    <StyledHeader>
      <Container style={{
        height: '100%',
      }}>
        <Flex>
          <Link href="/">
            <a>
              <Logo>XENELECTRONIC</Logo>
            </a>
          </Link>
          <CartWrapper onClick={handleRedirectToCart}>
            <CartIcon />
            {
              state.cart.length > 0 && (
                <span>{state.cart.length > 99 ? '99+' : state.cart.length}</span>
              )
            }
          </CartWrapper>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header