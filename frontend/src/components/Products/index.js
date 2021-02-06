import React, { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { Container } from '../Shared'
import { CategoriesWrapper, StyledSection, Category } from './styles'

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
      </Container>
    </StyledSection>
  )
}

export default Products