'use client';

import { ThemeProvider, Global } from '@emotion/react';
import { GlobalStyle } from '../styles/global';

import theme from '../styles/theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        {children}
      </ThemeProvider>
    </>
  );
}
