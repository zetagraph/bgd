import React from 'react'
import styled, { keyframes } from 'styled-components'

const Intro = () => (
  <Section>
    <Container>
      <Title>
        Ten principles of <span>Good Design</span>
      </Title>
      <Author>by Dieter Rams</Author>
    </Container>
  </Section>
)

const fadeUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 2rem 4rem 6rem;

  @media (min-width: 1200px) {
    padding: 7rem 4rem 13rem;
  }
`

const Container = styled.div`
  @media (min-width: 1200px) {
    max-width: 2000px;
  }
`

const Title = styled.h1`
  white-space: nowrap;
  font-size: 12vw;
  font-weight: 100;
  line-height: 1;
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    font-size: 12rem;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(100px);
    animation: ${fadeUp} 1s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  }

  span {
    display: block;
    font-weight: 700;
    letter-spacing: -0.2rem;
  }
`

const Author = styled.div`
  padding-left: 1rem;
  font-size: 1.8rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;

  @media (min-width: 1200px) {
    font-size: 2.2rem;
    opacity: 0;
    transform: translateY(100px);
    animation: ${fadeUp} 1s 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  }
`
export default Intro
