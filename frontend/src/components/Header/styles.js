import styled from '@emotion/styled'

export const StyledHeader = styled.header`
  height: 100px;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Logo = styled.h1`
  font-size: 30px;
  letter-spacing: 1px;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const CartWrapper = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    font-size: 10px;
    color: white;
    background-color: red;
    right: -5px;
    bottom: -2px;
    border-radius: 50%;
  }
`