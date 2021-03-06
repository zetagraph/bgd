import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterWrap>
    <FooterText>
      <a href="http://andreizvonkov.com/">Andrei Zvonkov</a> &middot; {new Date().getFullYear()}
    </FooterText>
  </FooterWrap>
)

const FooterWrap = styled.footer`
  padding: 2rem 4rem;
  text-align: right;
`

const FooterText = styled.div`
  font-size: 1.4rem;
  text-align: right;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;

  a {
    color: ${({ theme }) => theme.text};

    &:hover {
      text-decoration: underline;
    }
  }
`

export default Footer
