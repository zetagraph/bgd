import React from 'react'
import styled from 'styled-components'

const Principle = props => {
  return (
    <Item>
      <Number>{props.number}</Number>
      <TitlePrefix>Good Design</TitlePrefix>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Item>
  )
}

const Item = styled.div`
  position: relative;
  padding: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  @media (min-width: 800px) {
    padding: 7rem 6rem 6rem;
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
`

const Number = styled.div`
  margin-bottom: 2rem;
  font-size: 8rem;
  line-height: 70px;
  font-weight: 700;

  @media (min-width: 800px) {
    margin-bottom: 4rem;
    font-size: 10rem;
    line-height: 75px;
  }
`
const TitlePrefix = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  color: ${({ theme }) => theme.lightText};
`

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.25;
`

const Description = styled.div`
  font-size: 1.8rem;
  line-height: 1.5;
`

export default Principle
