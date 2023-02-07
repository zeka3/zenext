import 'styled-components';

export type BaseColorType = {
  primary: string;
  secondary: string;
  red: string;
  yellow: string;
  green: string;
  black: string;
  white: string;
};

export type ColorType = BaseColorType & {
  pageBg: string;
  componentBg: string;
  gray: string;
  text: string;
};

export type ColorKeys = keyof ColorType;

export type FontWeightType = {
  light: number;
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
};

export type FontFamilyType = {
  default: string;
};

export type ThemeUtilsType = {
  isDark: boolean;
  isLight: boolean;
  lightColors: ColorType;
  darkColors: ColorType;
};

interface ThemeType extends ThemeUtilsType {
  colors: ColorType;
  fontWeights: FontWeightType;
  fontFamilies: FontFamilyType;
  borderRadius: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
