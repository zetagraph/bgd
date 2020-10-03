import React from 'react'
import styled, { keyframes } from 'styled-components'

const Brand = () => {
  return (
    <BrandLink href="http://andreizvonkov.com">
      <BrandLetter>b</BrandLetter>
      <BrandLetter>g</BrandLetter>
      <BrandLetter>d</BrandLetter>
      <BrandTitle>Bureau of Good Design</BrandTitle>
    </BrandLink>
  )
}

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`

const Link = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
)

const BrandLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.lightText};
  }
`

const BrandLetter = styled.span`
  position: relative;
  display: inline-block;

  font-weight: 700;
  color: ${({ theme }) => theme.text};

  &:nth-child(-n + 2) {
    margin-right: 9px;
    padding-right: 12px;
  }

  &:nth-child(-n + 2):after {
    content: '';
    position: absolute;
    height: 22px;
    width: 1px;
    transform: rotate(20deg);
    background-color: var(--yellow);
    right: 0;
    top: 4px;
  }
`

const BrandTitle = styled.span`
  display: none;

  @media (min-width: 600px) {
    display: inline-block;
    position: relative;
    margin-left: 19px;
    padding-left: 25px;
    font-weight: 300;
    color: ${({ theme }) => theme.lightText};

    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: 0;
      width: 7px;
      height: 7px;
      background-color: var(--yellow);
      border-radius: 50%;
    }

    &:hover:before {
      animation: ${pulse} 0.7s ease infinite;
    }
  }
`

export default Brand
