import React from 'react'
import { Global, css } from '@emotion/react'

import Header from '../components/Header'
import { CartStateProvider } from '../context'

function MyApp({ Component, pageProps }) {
  return (
    <CartStateProvider>
      <Global
        styles={css`
          html, body {
            font-family: Inter, sans-serif;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Header />
      <Component {...pageProps} />
    </CartStateProvider>
  )
}

export default MyApp
