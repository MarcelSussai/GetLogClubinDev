import { ThemeProvider } from 'styled-components'
import CtxProvider from '../src/contexts/ctxGlobal'
import { GlobalStyle, theme } from '../stylesConfig'



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CtxProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CtxProvider>
    </>
  )
}
