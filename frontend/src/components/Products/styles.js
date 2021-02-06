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