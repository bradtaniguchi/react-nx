import { Auth0Provider } from '@auth0/auth0-react';
import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-huh5swix.us.auth0.com"
      clientId="ntQvYKn0woFLnmKmYJ0RoH1RYKqfrHci"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
