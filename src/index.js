import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/app';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '/src/themes/default';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
