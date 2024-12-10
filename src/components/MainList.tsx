import { List } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DrawerListItem from './DrawerListItem';

interface MainListProps {
  open: boolean;
}

export const MainList = ({ open }: MainListProps) => {
  const items = ['Inbox', 'Starred', 'Send email', 'Drafts'];
  
  return (
    <List>
      {items.map((text, index) => (
        <DrawerListItem 
          key={text}
          text={text}
          icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          open={open}
        />
      ))}
    </List>
  );
};