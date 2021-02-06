import React from 'react'
import CartIcon from '../CartIcon'

import { StyledHeader, Logo, Flex } from './styles'
import { Container } from '../Shared'

const Header = () => {
  return (
    <StyledHeader>
      <Container style={{
        height: '100%',
      }}>
        <Flex>
          <Logo>XENELECTRONIC</Logo>
          <CartIcon />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header