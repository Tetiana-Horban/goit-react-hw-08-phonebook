import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { Button } from '@mui/material';

export const Navigation = () => {
  const isLoggenIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <nav>
        <Button size="large" component={NavLink} to="/" color="inherit">
          Home
        </Button>
        {isLoggenIn && (
          <Button
            size="large"
            component={NavLink}
            to="/contacts"
            color="inherit"
          >
            Contacts
          </Button>
        )}
      </nav>
    </>
  );
};
