import { Title } from 'App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </>
  );
};
export default ContactsPage;
