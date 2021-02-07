import React from 'react'
import { css } from '@emotion/react'

import { Card, ProductImageWrapper, ProductName, ProductCount } from './styles'
import { Button } from '../Shared'
import { useCartDispatch } from '../../context'

const customButtonCss = css`
  width: 180px;
  margin-top: 10px;
`

const CartItem = ({ item }) => {
  const dispatch = useCartDispatch()

  const addMoreItem = () => {
    dispatch({ type: 'ADD_ITEM', item })
  }

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', item })
  }

  return (
    <Card>
      <ProductImageWrapper>
        <img src={item.productImage} alt="Product" /> 
      </ProductImageWrapper>
      <div style={{
        marginLeft: '1.5rem',
      }}>
        <ProductName>{item.productName}</ProductName>
        <ProductCount>Total: <b>{item.count}</b></ProductCount>
        <ProductCount>Price: <b>${item.price}</b></ProductCount>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        flex: 1,
      }}>
        <span style={{ marginBottom: '10px' }}><b>${item.count * item.price}</b></span>
        <Button onClick={addMoreItem} css={customButtonCss}>add more</Button>
        <Button onClick={removeItem} css={customButtonCss}>remove item</Button>
      </div>
    </Card>
  )
}

export default CartItem