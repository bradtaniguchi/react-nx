import { Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { LoginButton } from '../../core/auth/LoginButton';
import './Login.scss';

export const Login = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: '24px',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '50%',
        }}
      >
        <Grid item>
          <Card>
            <div className="column">
              <h1>Login page</h1>
              <div>
                <LoginButton></LoginButton>
              </div>
            </div>
          </Card>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Login;
