import { List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import SpamIcon from '@mui/icons-material/Report';
import DrawerListItem from './DrawerListItem';

interface SecondaryListProps {
  open: boolean;
}

export const SecondaryList = ({ open }: SecondaryListProps) => {
  const items = [
    { text: 'All mail', icon: <MailIcon /> },
    { text: 'Trash', icon: <DeleteIcon /> },
    { text: 'Spam', icon: <SpamIcon /> }
  ];
  
  return (
    <List>
      {items.map(({ text, icon }) => (
        <DrawerListItem 
          key={text}
          text={text}
          icon={icon}
          open={open}
        />
      ))}
    </List>
  );
};