import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

interface StyledAppBarProps {
  open: boolean;
  drawerWidth: number;
}

interface CustomAppBarProps {
  open: boolean;
  drawerWidth: number;
  handleDrawerOpen: () => void;
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth'})
  <StyledAppBarProps>(({ theme, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
//  width: `calc(100% - ${64}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const CustomAppBar = ({ open, drawerWidth, handleDrawerOpen }: CustomAppBarProps) => {
  return (
    <StyledAppBar position="fixed" open={open} drawerWidth={drawerWidth} >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default CustomAppBar;