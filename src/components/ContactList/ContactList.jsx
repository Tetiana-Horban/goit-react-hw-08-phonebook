import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/filter/filter-selectors';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

const ContactsList = () => {
  const { data: contacts, isFetching, isError } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const theme = createTheme();

  const getRenderContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid item xs={12} md={6}>
            {!isFetching &&
              !isError &&
              getRenderContacts().map(({ id, name, number }) => (
                <List key={id}>
                  <ContactListItem id={id} name={name} number={number} />
                </List>
              ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactsList;
