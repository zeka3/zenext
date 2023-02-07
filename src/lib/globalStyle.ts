import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.pageBg};
  }
  
  * {
    transition: background 0.15s ease-in-out, filter 0.15s ease-in-out;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.componentBg};
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.colors.componentBg};
    background: ${({ theme }) => theme.colors.gray};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;
