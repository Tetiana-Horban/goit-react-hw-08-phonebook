import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button, Avatar } from '@mui/material';
export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: '#01579b' }}></Avatar>
      <Button
        size="large"
        color="inherit"
        type="button"
        onClickCapture={() => dispatch(authOperations.logout())}
      >
        Logout
      </Button>
    </>
  );
};
