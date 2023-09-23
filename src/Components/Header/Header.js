import React from 'react';
import { useNavigate } from 'react-router-dom';
import translations from '../../translations';
import {
  Button,
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { TitleInHeaderForDesktop } from './Header.style';

const pages = [
  { name: translations.HEADER.HOME, link: 'home' },
  { name: translations.HEADER.ABOUT_US, link: 'about' },
  { name: translations.HEADER.PRODUCTS, link: 'products' },
  { name: translations.HEADER.CONTACT_US, link: 'contact' },
];

const drawerWidth = 240;
const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onPageClick = (page) => {
    navigate(page.link);
    setMobileOpen(false);
  };

  const MenuItemsInHeaderForDesktop = () => (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.name}
          onClick={() => onPageClick(page)}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar position='sticky'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleDrawerToggle}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <TitleInHeaderForDesktop href='/home'>
              {translations.HEADER.COMPANY_NAME}
            </TitleInHeaderForDesktop>
            <MenuItemsInHeaderForDesktop />
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#eee',
            },
          }}
        >
          <div>
            <Toolbar />
            <List>
              {pages.map((page) => (
                <ListItem key={page.name} disablePadding>
                  <ListItemButton onClick={() => onPageClick(page)}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
