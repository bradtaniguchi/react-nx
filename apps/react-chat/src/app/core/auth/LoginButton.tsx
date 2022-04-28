import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { environment } from '../../../environments/environment';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      onClick={() =>
        loginWithRedirect({
          appState: {},
          redirectUri: environment.auth0RedirectUri,
        })
      }
    >
      Log In
    </Button>
  );
};
