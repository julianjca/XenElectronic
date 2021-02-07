import React from 'react'
import styled from '@emotion/styled'
import Router from 'next/router'

import { useCartState } from '../context'
import { Container, Button } from '../components/Shared'
import CartItem from '../components/CartItem'

const Grid = styled.div`
  margin-top: 40px;

  @media (min-width: 1200px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const CartPageContainer = styled(Container)`
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`

const TotalPriceWrapper = styled.div`
  margin-top: 40px;

  @media (min-width: 1200px) {
    margin-top: 0;
    margin-left: 50px;
    flex: 0 0 300px;
  }
`

const CartPage = () => {
  const state = useCartState()

  const totalPrice = state.cart.reduce((a, b) => {
    return a + b.price * b.count;
  }, 0);

  const checkOut = () => {
    Router.push('/pay')
  }
  
  return (
    <CartPageContainer>
      <h2>My Cart</h2>
      {state.cart.length > 0 ? (
        <Grid>
          <div style={{
            flex: '1'
          }}>
            {state.cart.map(product => {
              return <CartItem key={product.id} item={product} />
            })}
          </div>
          <TotalPriceWrapper>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}>
              <h2>Total Price</h2>
              <div>${totalPrice}</div>
            </div>
            <Button onClick={checkOut} style={{ height: '50px' }} fullWidth>Checkout</Button>
          </TotalPriceWrapper>
        </Grid>
      ) : (
        <div>
          <p style={{
            margin: '40px 0 20px'
          }}>Your cart is empty.</p>
          <Button onClick={() => Router.push('/')}>Shop now</Button>
        </div>
      )}   
    </CartPageContainer>
  )
}

export default CartPage