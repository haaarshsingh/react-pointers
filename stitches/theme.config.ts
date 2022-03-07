import { createStitches } from '@stitches/react'

import { Black, White } from 'kraftuur'

export const { css, styled, globalCss, getCssText, keyframes } = createStitches(
  {
    theme: {
      colors: {
        main: '#FF7ABA',
        primary: '#FFF',
        bg: '#181719',
        fg: '#27242C',
        ...Black,
        ...White,
      },
      fontSizes: {
        1: '14px',
        2: '18px',
        3: '20px',
        4: '24px',
        5: '36px',
        6: '48px',
      },
      fonts: {
        main: 'Lexend, sans-serif',
      },
    },
    media: {
      iPadPro: '(max-width: 1024px)',
      iPad: '(max-width: 768px)',
      iPhonePlus: '(max-width: 425px)',
      iPhone: '(max-width: 375px)',
      iPhoneSE: '(max-width: 320px)',
    },
  }
)
