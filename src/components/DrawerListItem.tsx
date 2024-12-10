import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';

interface DrawerListItemProps {
  text: string;
  icon: ReactNode;
  open: boolean;
}

const DrawerListItem = ({ text, icon, open }: DrawerListItemProps) => (
  <ListItem disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        px: 2.5,
        justifyContent: open ? 'initial' : 'center',
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          justifyContent: 'center',
          mr: open ? 3 : 'auto',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{
          opacity: open ? 1 : 0,
          display: open ? 'block' : 'none',
        }}
      />
    </ListItemButton>
  </ListItem>
);

export default DrawerListItem;