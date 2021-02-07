import React from 'react'
import Router from 'next/router'

import { Card } from './styles'
import { Button } from '../Shared'

const ThankYou = () => {
  return (
    <Card>
      <h2>THANK YOU.</h2>
      <p>Your order is being processed.</p>
      <Button onClick={() => Router.push('/')} style={{ fontSize: '1.2rem', padding: '10px 50px' }}>Back to home</Button>
    </Card>
  )
}

export default ThankYou