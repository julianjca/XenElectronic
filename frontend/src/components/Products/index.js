import React, { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import PropTypes from 'prop-types'

import { Button, Container } from '../Shared'
import { CategoriesWrapper, StyledSection, Category, Card, CardContainer, ProductImage, ProductInfo } from './styles'
import { useCartDispatch } from '../../context'

const fetcher = url => axios.get(url).then(res => res.data)

const Products = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const { data } = useSWR(`${process.env.API_URL}/products?categoryId=${activeCategory}`, fetcher)

  const dispatch = useCartDispatch()

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', item: product })
  }

  return (
    <StyledSection>
      <Container>
        <CategoriesWrapper>
          {
            categories.map((category) => (
              <Category 
                onClick={() => setActiveCategory(category.id)} 
                active={category.id === activeCategory} 
                key={category.id}
              >
                {category.name}
              </Category>
            ))
          }
        </CategoriesWrapper>
        <CardContainer>
          {
            data && data.products.map(product => (
              <Card key={product.id}>
                <ProductImage>
                  <img src={product.productImage} />
                </ProductImage>
                <ProductInfo>
                  <h2>{product.productName}</h2>
                  <Button onClick={() => addToCart(product)}>add to cart</Button>
                </ProductInfo>
              </Card>
            ))
          }
        </CardContainer>
      </Container>
    </StyledSection>
  )
}

Products.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    categoryId: PropTypes.string.isRequired,
  }))
}

export default Products