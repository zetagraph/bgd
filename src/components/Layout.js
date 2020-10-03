import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/Themes'
import { useDarkMode } from './useDarkMode'
import GlobalStyles from '../styles/GlobalStyles'
import SEO from './SEO'
import Header from './Header'
import Brand from './Brand'
import Footer from './Footer'
import Toggle from './Toggler'

const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <SEO />
        <GlobalStyles />
        <Header>
          <Brand />
          <Toggle
            theme={theme}
            toggleTheme={themeToggler}
          />
        </Header>
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
