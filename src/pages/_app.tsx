import 'assets/css/style.css';
import React from 'react';

import useDarkMode from '@fisch0920/use-dark-mode';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'lib/globalStyle';
import { borderRadius, darkColors, fontFamilies, fontWeights, lightColors } from 'utils/style';

function Body({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default function App(props: AppProps) {
  const { value: isDark } = useDarkMode(true);
  const themeColors = React.useMemo(() => (isDark ? darkColors : lightColors), [isDark]);
  const theme = React.useMemo(
    () => ({
      colors: themeColors,
      lightColors,
      borderRadius,
      darkColors,
      fontWeights,
      fontFamilies,
      isDark,
      isLight: !isDark,
    }),
    [isDark, themeColors],
  );

  return (
    <ThemeProvider theme={theme}>
      <Body {...props} />
    </ThemeProvider>
  );
}
