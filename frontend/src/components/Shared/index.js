import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;
`

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: #1c1c1c;
  padding: 8px 12px;
  box-shadow: none;
  color: #ffffff;
  text-transform: uppercase;
  width: ${props => props.fullWidth && '100%'};
  box-sizing: border-box;
  cursor: pointer;
`