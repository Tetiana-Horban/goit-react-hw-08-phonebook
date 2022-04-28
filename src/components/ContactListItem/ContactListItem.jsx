import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import {
  Avatar,
  IconButton,
  ListItemText,
  ListItemAvatar,
  ListItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}></Avatar>
      </ListItemAvatar>
      <ListItemText>
        Name: {name} <br />
        Phone: {number}
      </ListItemText>
      <IconButton aria-label="delete" onClick={() => deleteContact(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;
