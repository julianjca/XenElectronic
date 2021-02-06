import React, { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { Container } from '../Shared'
import { CategoriesWrapper, StyledSection, Category, Card, CardContainer, ProductImage, ProductInfo } from './styles'

const fetcher = url => axios.get(url).then(res => res.data)

const Products = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const { data, error } = useSWR(`http://localhost:3030/products?categoryId=${activeCategory}`, fetcher)

  console.log(data)

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
                </ProductInfo>
              </Card>
            ))
          }
          
        </CardContainer>
      </Container>
    </StyledSection>
  )
}

export default Products