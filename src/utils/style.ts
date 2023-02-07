import { BaseColorType, ColorType, FontFamilyType, FontWeightType } from 'typings/styled';

type BreakPointType = ('mobile' | 'tablet' | 'desktop' | 'wide') & string;

export const baseColors: BaseColorType = {
  primary: '#4F46E5',
  secondary: '#A5B4FC',
  black: '#000000',
  white: '#FFFFFF',
  red: '#Ef4444',
  green: '#22C55E',
  yellow: '#EAB308',
};

export const darkColors: ColorType = {
  ...baseColors,
  pageBg: '#1E293B',
  componentBg: '#334155',
  gray: '#D1D5DB',
  text: '#FAFAFA',
} as const;

export const lightColors: ColorType = {
  ...baseColors,
  pageBg: '#FFFFFF',
  componentBg: '#F4F4F4',
  gray: '#6B7280',
  text: '#171717',
} as const;

export const borderRadius = '8px';

export const fontWeights: FontWeightType = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const fontFamilies: FontFamilyType = {
  default: "'Lato', Helvetica, Arial, sans-serif",
} as const;

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1200,
  wide: 1400,
};

export function mediaBreakpointDown(breakpoint: BreakPointType) {
  if (breakpoint === 'mobile') {
    return `@media (max-width: ${breakpoints.mobile}px)`;
  }
  if (breakpoint === 'tablet') {
    return `@media (max-width: ${breakpoints.tablet}px)`;
  }
  if (breakpoint === 'desktop') {
    return `@media (max-width: ${breakpoints.desktop}px)`;
  }
  if (breakpoint === 'wide') {
    return `@media (max-width: ${breakpoints.wide}px)`;
  }
  return `@media (max-width: ${breakpoint}px)`;
}

export function mediaBreakpointUp(breakpoint: BreakPointType) {
  if (breakpoint === 'mobile') {
    return `@media (min-width: ${breakpoints.mobile}px)`;
  }
  if (breakpoint === 'tablet') {
    return `@media (min-width: ${breakpoints.tablet}px)`;
  }
  if (breakpoint === 'desktop') {
    return `@media (min-width: ${breakpoints.desktop}px)`;
  }
  if (breakpoint === 'wide') {
    return `@media (min-width: ${breakpoints.wide}px)`;
  }
  return `@media (min-width: ${breakpoint}px)`;
}

export const hideOnMobileDown = `
    ${mediaBreakpointDown('mobile')}{
        display: none !important;
    }
`;

export const hideOnTabletDown = `
    ${mediaBreakpointDown('tablet')}{
        display: none !important;
    }
`;

export const hideOnWideDown = `
    ${mediaBreakpointDown('wide')}{
        display: none !important;
    }
`;

export const hideOnDesktopDown = `
    ${mediaBreakpointDown('desktop')}{
        display: none !important;
    }
`;

export const hideOnMobileUp = `
    ${mediaBreakpointUp('mobile')}{
        display: none !important;
    }
`;

export const hideOnTabletUp = `
    ${mediaBreakpointUp('tablet')}{
        display: none !important;
    }
`;

export const hideOnDesktopUp = `
    ${mediaBreakpointUp('desktop')}{
        display: none !important;
    }
`;

export const hideOnWideUp = `
    ${mediaBreakpointUp('wide')}{
        display: none !important;
    }
`;

export function convertHexToRGBA(hex: string, alpha: number) {
  const parsedHex = hex.replace('#', '');
  const r = parseInt(parsedHex.substring(0, 2), 16);
  const g = parseInt(parsedHex.substring(2, 4), 16);
  const b = parseInt(parsedHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${alpha})`;
}

export function applyTransition(property: string, transitionDuration = 150) {
  return `transition: ${property} ${transitionDuration}ms ease`;
}

export const layers = {
  header: 10,
  modal: 10000000,
  tooltip: 10000001,
};

export function disableSelect() {
  return `
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;  
  `;
}

export function gradientText(color: string) {
  return `
    background: ${color};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
}

export function lineClamp(line: number) {
  return `
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
}
