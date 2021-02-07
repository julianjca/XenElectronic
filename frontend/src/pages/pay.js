import React from 'react'
import Router from 'next/router'

import { useCartState, useCartDispatch } from '../context'
import { Container } from '../components/Shared'
import Pay from '../components/Pay'

const PayPage = () => {
  const state = useCartState()
  const dispatch = useCartDispatch()

  const totalPrice = state.cart.reduce((a, b) => {
    return a + b.price * b.count;
  }, 0);

  const pay = () => {
    Router.push('/thank-you')
    dispatch({ type: 'CLEAR_CART' })
  }
  
  return (
    <Container>
      <Pay totalPrice={totalPrice} pay={pay} />
    </Container>
  )
}

export default PayPage