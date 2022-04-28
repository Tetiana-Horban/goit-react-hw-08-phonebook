import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filter-action';
import { Container, CssBaseline, Box, Grid, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => dispatch(changeFilter(event.target.value));
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Find contacts by name"
            type="text"
            onChange={onChange}
          />
          <Grid container></Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Filter;
