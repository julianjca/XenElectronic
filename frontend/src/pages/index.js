import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'

import Products from '../components/Products'

export default function Home({ categories }) {
  console.log(categories)
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

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.API_URL}/categories`)

  console.log(res.data)

  return {
    props: {
      categories: res.data.categories
    }
  }
}