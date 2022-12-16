import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 200;
  src: local(''),
       url('/fonts/jost-v14-latin-200.woff2') format('woff2')
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/fonts/jost-v14-latin-300.woff2') format('woff2')
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/jost-v14-latin-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/jost-v14-latin-500.woff2') format('woff2')
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/jost-v14-latin-700.woff2') format('woff2')
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('/fonts/jost-v14-latin-800.woff2') format('woff2')
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('/fonts/jost-v14-latin-900.woff2') format('woff2')
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      background-color: ${theme.colors.secondaryBg};
    }
  `}
`

export default GlobalStyles
