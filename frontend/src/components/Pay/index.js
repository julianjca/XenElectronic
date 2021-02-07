import React from 'react'

import { Card, InputWrapper, Input, Label, Grid } from './styles'
import { Button } from '../Shared'

const Pay = ({ totalPrice, pay }) => {
  return (
    <Card>
      <div>${totalPrice}</div>
      <InputWrapper>
        <Label>Credit Car Number</Label>
        <Input placeholder="1234 5678 4321 8765" />
      </InputWrapper>
      <Grid>
        <InputWrapper>
          <Label>Date</Label>
          <Input placeholder="11/21" />
        </InputWrapper>
        <InputWrapper>
          <Label>CVV</Label>
          <Input placeholder="123" />
        </InputWrapper>
      </Grid>
      <InputWrapper>
        <Label>Name</Label>
        <Input placeholder="John Doe" />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input placeholder="john@doe.com" />
      </InputWrapper>
      <div style={{
        marginTop: '40px',
      }}>
        <Button style={{ height: '40px' }} fullWidth onClick={pay}>Pay</Button>
      </div>
    </Card>
  )
}

export default Pay