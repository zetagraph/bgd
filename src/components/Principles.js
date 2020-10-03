import React from 'react'
import styled from 'styled-components'
import Principle from './Principle'
import principlesData from './principlesData'
import Dots from '../assets/svgs/dots.svg'
import DieterRamsWebp from '../assets/images/dieter-rams-2.webp'
import DieterRamsJpg from '../assets/images/dieter-rams-2.jpg'

const Principles = () => {
  const principles = principlesData.map(principle => (
    <Principle
      key={principle.id}
      number={principle.number}
      title={principle.title}
      description={principle.description}
    />
  ))

  return (
    <Section>
      <FirstItem>
        <Picture>
          <source srcSet={DieterRamsWebp} type="image/webp" />
          <img src={DieterRamsJpg} alt="Dieter Rams" />
        </Picture>
      </FirstItem>
      {principles}
      <LastItem>
        <Dots />
      </LastItem>
    </Section>
  )
}

const Section = styled.section`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid ${({ theme }) => theme.borderColor};
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const FirstItem = styled.div`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  @media (min-width: 800px) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
`

const Picture = styled.picture`
  display: flex;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    max-height: 700px;
    object-fit: cover;
  }
`

const LastItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  @media (min-width: 800px) {
    padding: 8rem;
  }

  .dots {
    width: 100%;
    min-width: 300px;
    fill: ${({ theme }) => theme.svgColor};
  }
`

export default Principles
