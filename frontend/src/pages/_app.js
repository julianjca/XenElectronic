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
          h1, h2, h3, h4, h5, h6, p {
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
