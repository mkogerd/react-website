import React from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { 
  alpha,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
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
    <MobileNavMenu
      className='mobile-nav-menu'
      onClick={handleDrawerToggle}
      variants={mobileNavMenuAnimationVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <List>
        {navItems.map((item) => (
          <Link key={item} to={item} spy={true} smooth={true} duration={500} onClick={handleDrawerToggle}>
            <MobileNavListItem key={item} variants={mobileNavListItemAnimationVariants} disablePadding>
              <ListItemButton sx={{ textAlign: 'center', padding: 2 }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </MobileNavListItem>
          </Link>
        ))}
      </List>
    </MobileNavMenu>
  );

  return (
    <Box className='nav-wrapper'>
      <NavBar className='navbar'>
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

          <MobileNavMenuButton aria-label="open navigation menu" onClick={handleDrawerToggle}>
            <Menu />
          </MobileNavMenuButton>
        </Container>
      </NavBar>

      <AnimatePresence>
        {mobileOpen && mobileNavMenu}
      </AnimatePresence>
    </Box>
  );
}

const MobileNavMenu = motion(styled(Box)(({ theme }) => ({
  position: 'fixed',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  width: '100%',
  height: '100%',
  paddingTop: '70px',
  zIndex: 10,
  backgroundColor: theme.palette.background.default,
})));

const mobileNavMenuAnimationVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      ease: 'linear',
    }
  },
  hidden: {
    opacity: 0,
    x: 10,
  },
  exit: {
    opacity: 0,
    x: 10,
  },
}

const MobileNavListItem = motion(ListItem);

const mobileNavListItemAnimationVariants = {
  visible: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'backOut',
    },
  },
  hidden: {
    scale: 0.75,
    y: 50,
  },
}

const NavBar = styled(Box)(({ theme }) => ({
  height: '68px',
  width: '100%',
  zIndex: 20,
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.background.secondary, 0.9),
  WebkitBackdropFilter: 'blur(10px) contrast(180%)',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.04),0 -1px 0 0 rgba(0,0,0,.08)',
}));

const MobileNavMenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  padding: theme.spacing(2),
}));

export default NavigationBar;