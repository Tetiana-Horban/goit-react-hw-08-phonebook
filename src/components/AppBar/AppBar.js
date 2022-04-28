import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppBar, Box, Toolbar } from '@mui/material';

export const AppBarComponent = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box m>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navigation />
          <span style={{ display: 'flex' }}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </span>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
