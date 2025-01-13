'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

const resetStyles = {
  'h1': {
    fontSize: '100%',
  }
};

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles styles={resetStyles} />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
