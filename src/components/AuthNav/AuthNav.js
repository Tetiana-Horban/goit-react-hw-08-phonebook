import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <>
      <Button size="large" component={NavLink} to="/login" color="inherit">
        Login
      </Button>
      <Button size="large" component={NavLink} to="/register" color="inherit">
        Register
      </Button>
    </>
  );
};
