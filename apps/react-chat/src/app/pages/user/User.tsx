import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!user || !isAuthenticated) {
    return (
      <div>
        Not Logged in??
        <Button variant="contained">
          <Link to="/login" />
        </Button>
      </div>
    );
  }

  return (
    <div title={'' + user}>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
