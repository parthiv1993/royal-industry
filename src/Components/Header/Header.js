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
  Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { TitleInHeaderForDesktop } from './Header.style';

const pages = [
  { name: translations.HEADER.HOME, link: '' },
  { name: translations.HEADER.ABOUT_US, link: 'about' },
  { name: translations.HEADER.PRODUCTS, link: 'products' },
  { name: translations.HEADER.CONTACT_US, link: 'contact' },
];

const drawerWidth = 160;
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

  // eslint-disable-next-line no-undef
  const baseurl = process.env.PUBLIC_URL;

  const MenuItemsInHeaderForDesktop = () => (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={`${page.name}-page`}
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
        <Container>
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
            <TitleInHeaderForDesktop href={`${baseurl}/`}>
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
          <Toolbar />
          <List>
            <Divider light />
            {pages.map((page) => (
              <React.Fragment key={`${page.name}-menu-item`}>
                <ListItem disablePadding>
                  <ListItemButton
                    key={`${page.name}-menu-button`}
                    onClick={() => onPageClick(page)}
                  >
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
                <Divider light />
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
