import styled from '@emotion/styled'

export const Card = styled.div`
  box-shadow: 5px 5px 15px #1c1c1c40;
  border-radius: 10px;
  display: flex;
  padding: 12px;

  & + & {
    margin-top: 20px;
  }
`

export const ProductImageWrapper = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    width:100%; 
    height:100%;
  }
`

export const ProductName = styled.h2`
  margin: 0;
`

export const ProductCount = styled.p`
  margin-top: 5px;
`