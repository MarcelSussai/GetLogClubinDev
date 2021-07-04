import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ul[class], ol[class] {
    padding: 0;
  }

  body, h1, h2, h3, h4, p, ul[class], ol[class], li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
  }

  html::-webkit-scrollbar {
    
  }
  html::-webkit-scrollbar-button  {
    
  }
  html::-webkit-scrollbar-track  {
    
  }
  html::-webkit-scrollbar-track-piece {
    
  }
  html::-webkit-scrollbar-thumb {
    
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    padding: 0;
    line-height: 1.6;
    overflow-x: hidden;
  }

  ul[class], ol[class] {
    list-style: none;
  }

  a:not([class]) {
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input, button, textarea, select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export type ThemeTypes = {
  colors: {
    brown: {
      c100: string;
      c200: string;
      c300: string;
      c400: string;
      c500: string;
      c600: string;
      c700: string;
      c800: string;
      p900: string;
    };
    red: {
      c100: string;
      c200: string;
      c300: string;
      c400: string;
      p500: string;
      c600: string;
      c700: string;
      c800: string;
    };
    yellow: {
      c100: string;
      c200: string;
      c300: string;
      c400: string;
      p500: string;
      c600: string;
      c700: string;
      c800: string;
    };
    green: {
      c100: string;
      c200: string;
      p300: string;
      c400: string;
      c500: string;
      c600: string;
      c700: string;
      c800: string;
    };
    blue: {
      c100: string;
      c200: string;
      c300: string;
      c400: string;
      p500: string;
      c600: string;
      c700: string;
      c800: string;
    };
    aqua: {
      c100: string;
      c200: string;
      c300: string;
      p400: string;
      c500: string;
      c600: string;
      c700: string;
    };
    skin: {
      c100: string;
      c200: string;
      p300: string;
      c400: string;
      c500: string;
      c600: string;
      c700: string;
      c800: string;
    };
    gray: {
      c100:   string;
      c200:   string;
      c300:   string;
      c400:   string;
      c500:   string;
      c600:   string;
      c700:   string;
      c800:   string;
      c900:   string;
    };
    white:        string;
    whiteOpacity: string;
    black:        string;
    blackShadow:  string;
    blackShadow2: string;
    blackShadow3: string;
    greenShadow:  string;
  };
}
export const theme: ThemeTypes = {
  colors: {
    brown: {
      c100: '#F8F0EE',
      c200: '#EEDAD5',
      c300: '#DCB6AA',
      c400: '#CB9180',
      c500: '#B96C55',
      c600: '#95523D',
      c700: '#6B3A2C',
      c800: '#40231A',
      p900: '#160C09',
    },
    red: {
      c100: '#FFECE5',
      c200: '#FFCFBF',
      c300: '#FFA07F',
      c400: '#FF703E',
      p500: '#FD4100',
      c600: '#A92B00',
      c700: '#541600',
      c800: '#200800',
    },
    yellow: {
      c100: '#FFF7DF',
      c200: '#FFF0BF',
      c300: '#FFE89F',
      c400: '#FFD85E',
      p500: '#FDC000',
      c600: '#BE9000',
      c700: '#7F6000',
      c800: '#3F3000',
    },
    green: {
      c100: '#F8FFE5',
      c200: '#EEFFBF',
      p300: '#BCFD00',
      c400: '#8DBE00',
      c500: '#678B00',
      c600: '#475F00',
      c700: '#2F3F00',
      c800: '#182000',
    },
    blue: {
      c100: '#ECFAFF',
      c200: '#CCF2FF',
      c300: '#9FE6FF',
      c400: '#54D3FF',
      p500: '#00BCFD',
      c600: '#008DBE',
      c700: '#005E7F',
      c800: '#002F3F',
    },
    aqua: {
      c100: '#ECFFFA',
      c200: '#BFFFEF',
      c300: '#7FFFE0',
      p400: '#00FDBF',
      c500: '#00BE8F',
      c600: '#007F60',
      c700: '#003F30',
    },
    skin: {
      c100: '#FEFBF5',
      c200: '#FDF6EB',
      p300: '#FAEDD7',
      c400: '#F4D6A3',
      c500: '#EDBF70',
      c600: '#E7A73C',
      c700: '#9B6913',
      c800: '#67460D',
    },
    gray: {
      c100:   '#ebebed',
      c200:   '#D7D7DB',
      c300:   '#c3c3c9',
      c400:   '#9b9ba5',
      c500:   '#747481',
      c600:   '#505059',
      c700:   '#1A1A1D',
      c800:   '#131315',
      c900:   '#101011',
    },
    white:        '#FFFFFF',
    whiteOpacity: '#FFFFFFdd',
    black:        '#000000',
    blackShadow:  '#00000016',
    blackShadow2: '#00000048',
    blackShadow3: '#00000032',
    greenShadow:  '#BCFD0040',
  },
}

export const fontF = `font-family: 'Montserrat', sans-serif;`
export const cusTR = (time: string) => `transition: all ${time} ease-in;`
export const cusMQ = (size: number) => `@media (min-width: ${size}px)`
export const CBs = (value: string) => `cubic-bezier(${value})`

export const CBsValues = {
  cb_01: '0.68, -0.55, 0.265, 1.55',
  cb_02: '0.175, 0.885, 0.32, 1.275',
  cb_03: '0.6, -0.28, 0.735, 0.045',
  cb_04: '0.785, 0.135, 0.15, 0.86',
}