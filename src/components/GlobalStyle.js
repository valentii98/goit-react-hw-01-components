import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
  align-items: center;
  justify-content: center;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
`;
export const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' + 0.3 +
    ')';

  return color;
};