/** @jsx jsx */
import { Fragment } from 'react'
import { Global } from '@emotion/core'
import { Container, jsx } from 'theme-ui'
import SVG from './svg.js'
import { Static, UpDown, UpDownWide } from './animation.js'

import Header from './header.js'
import Footer from './footer.js'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Global
        styles={{
          '*': {
            boxSizing: `inherit`,
            margin: 0,
            padding: 0,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          a: {
            textDecoration: 'none',
          },
        }}
      />
      <Static>
        <SVG
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_darker"
          left="5%"
          top="70%"
        />
        <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          color="icon_brightest"
          left="20%"
          top="20%"
        />
        <SVG
          icon="upDown"
          width={8}
          color="icon_darkest"
          left="95%"
          top="90%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_darker"
          left="40%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_darker"
          left="25%"
          top="5%"
        />
        <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
        <SVG
          icon="box"
          hiddenMobile
          width={64}
          color="icon_purple"
          left="5%"
          top="90%"
        />
        <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        <SVG
          icon="hexa"
          width={16}
          stroke
          color="icon_darker"
          left="10%"
          top="50%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke
          color="icon_darker"
          left="80%"
          top="70%"
        />
      </Static>
      <UpDown>
        <SVG
          icon="triangle"
          hiddenMobile
          width={48}
          stroke
          color="icon_orange"
          left="10%"
          top="20%"
        />
        <SVG
          icon="hexa"
          width={48}
          stroke
          color="icon_red"
          left="80%"
          top="70%"
        />
        <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_blue"
          left="80%"
          top="10%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="icon_pinker"
          left="90%"
          top="50%"
        />
        <SVG icon="circle" width={16} color="icon_white" left="70%" top="90%" />
        <SVG
          icon="triangle"
          width={16}
          stroke
          color="icon_darkest"
          left="30%"
          top="65%"
        />
        <SVG
          icon="cross"
          width={16}
          stroke
          color="icon_pink"
          left="28%"
          top="15%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_darkest"
          left="75%"
          top="10%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Container sx={{ p: 0, boxShadow: 'xl' }}>
        <Header />
        <main sx={{ px: 5 }}>{children}</main>
        <Footer />
      </Container>
    </Fragment>
  )
}
