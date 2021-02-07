import React from 'react'

import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import PropTypes from 'prop-types'

import Products from '../components/Products'

export default function Home({ categories }) {
  return (
    <div>
      <Head>
        <title>XenElectronic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/hero.jpg" height={715} width={2094} alt="Hero" />
      <Products categories={categories} />
    </div>
  )
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    categoryId: PropTypes.string.isRequired,
  }))
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.API_URL}/categories`)


  return {
    props: {
      categories: res.data.categories
    }
  }
}