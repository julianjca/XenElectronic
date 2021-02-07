import styled from '@emotion/styled'

export const Card = styled.div`
  box-shadow: 5px 5px 15px #1c1c1c10;
  border-radius: 10px;
  width: 350px;
  padding: 20px;
  margin: 0 auto;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
`

export const Label = styled.label`
  display: block;
`

export const Input = styled.input`
  box-shadow: 5px 5px 15px #1c1c1c40;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5px;
  border: none;
  padding: 12px;

  &::placeholder {
    color: #1c1c1c40;
  }
`

export const InputWrapper = styled.div`
  margin-top: 20px;
`