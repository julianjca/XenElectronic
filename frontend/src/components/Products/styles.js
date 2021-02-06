import styled from '@emotion/styled'

export const CategoriesWrapper = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledSection = styled.section`
  padding: 40px 0;
  min-height: 600px;
`

export const Category = styled.div`
  border-bottom: ${props => props.active && '1px solid black'};
  padding: 0 0 0.5rem 0;
  color: ${props => props.active ? '#1a1a1a' : '#545454'};
  font-size: 0.9rem;
  font-weight: ${props => props.active ? 500 : 300};
  cursor: pointer;
  margin-top: 1rem;

  @media (min-width: 720px) {
    margin-top: 0;
    font-size: 1.2rem;
  }
`

export const Card = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
  height: 350px;
  background: #ffffff;
  box-shadow: 5px 5px 15px #1c1c1c40;
  border-radius: 10px;

  @media (min-width: 1200px) {
    height: 500px;
  }
  @media (min-width: 1400px) {
    height: 450px;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 40px;
  grid-gap: 20px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const ProductImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    width:100%; 
    height:100%;
  }
`

export const ProductInfo = styled.div`
  padding: 8px 14px;
`