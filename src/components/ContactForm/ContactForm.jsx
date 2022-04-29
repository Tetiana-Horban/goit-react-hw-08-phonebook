import { useState } from 'react';
import Notiflix from 'notiflix';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contactsApi';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useCreateContactMutation();

  const theme = createTheme();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      addContact({ name, number });
    }
    resetForm();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Create new contact
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputProps={{
                    pattern:
                      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                  }}
                  fullWidth
                  required
                  label="Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                  title={
                    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{
                    pattern:
                      '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
                  }}
                  fullWidth
                  label="Number"
                  type="tel"
                  value={number}
                  onChange={handleChange}
                  name="number"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default ContactForm;
