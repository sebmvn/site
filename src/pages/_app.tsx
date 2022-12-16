/* eslint-disable react/no-unescaped-entities */
import { CalcProvider } from 'hooks/use-calc'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CalcProvider>
        <Head>
          <title></title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="canonical" href="https://sebmvn.org" />
          <meta name="description" content="SEBMVN" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </CalcProvider>
    </ThemeProvider>
  )
}
