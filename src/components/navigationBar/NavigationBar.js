import React from "react";
import { Link } from "react-scroll";
import { 
  alpha,
  Box,
  Button,
  Container,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7, Menu } from "@mui/icons-material";

import { ColorModeContext } from 'App';

const navItems = ['About', 'Projects', 'Contact'];

function NavigationBar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const mobileNavMenu = (
    <Box className='mobile-nav-menu' onClick={handleDrawerToggle}
      sx={{
        position: 'fixed',
        display: { xs: 'block', sm: 'none' },
        width: '100%',
        height: '100%',
        pt: theme.components.NavigationBar.height,
        zIndex: 10,
        bgcolor: 'background.default',
      }}
    >
      <List>
        {navItems.map((item) => (
          <Link key={item} to={item} spy={true} smooth={true} duration={500} onClick={handleDrawerToggle}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center', padding: 2 }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className='nav-wrapper'>
      <Box className='navbar'
        sx={{
          height: '68px',
          width: '100%',
          zIndex: 20,
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          bgcolor: alpha(theme.palette.background.secondary, 0.9),
          WebkitBackdropFilter: 'blur(10px) contrast(180%)',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.04),0 -1px 0 0 rgba(0,0,0,.08)',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box sx={{ 
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Link key={item} to={item} spy={true} smooth={true} duration={500}>
                <Button key={item} sx={{ px: 2 }}>
                  {item}
                </Button>
              </Link>
            ))}
          </Box>

          <IconButton
            aria-label="toggle dark/light mode"
            onClick={colorMode.toggleColorMode}
            sx={{ p: 2 }}
          >
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <IconButton
            aria-label="open navigation menu"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: 'none' },
              p: 2,
            }}
          >
            <Menu />
          </IconButton>
        </Container>
      </Box>

      <Fade
        in={mobileOpen}
        {...(mobileOpen ? { timeout: 500 } : {})}
      >
        { mobileNavMenu }
      </Fade>
    </Box>
  );
}

export default NavigationBar;