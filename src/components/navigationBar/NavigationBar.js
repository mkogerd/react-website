import { 
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Menu } from "@mui/icons-material";

import { ColorModeContext } from 'App';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const navItems = ['About', 'Projects', 'Contact'];

function NavigationBar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={`#${item}`}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky">

      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Link href={`#${item}`}>
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            </Link>
          ))}
        </Box>
      </StyledToolbar>

      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </AppBar>
  );
}

export default NavigationBar;