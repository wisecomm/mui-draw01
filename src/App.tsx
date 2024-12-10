import { Box, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import CustomAppBar from './components/CustomAppBar';
import CustomDrawer from './components/CustomDrawer';

const drawerWidth = 240;

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
      />
      <CustomAppBar 
        open={open} 
        drawerWidth={drawerWidth} 
        handleDrawerOpen={handleDrawerOpen} 
      />
    </Box>
  );
}
