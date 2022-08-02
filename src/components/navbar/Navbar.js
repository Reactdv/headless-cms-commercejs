import React, { useState } from 'react';
import { Box,AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';

const drawerWidth = 0;


const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} 
        to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed"
      style={{
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
      sx={
        (theme)=>({
           [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
       }
        })
      } color="inherit">
        <Toolbar>
          <Typography component={Link} 
          to="/" variant="h6" sx={{
            flexGrow: 1,
            alignItems: 'center',
            display: 'flex',
            textDecoration: 'none',
            gap:"30px"
          }} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" sx={{
              marginRight: '30px'
            }}/> Commerce.js
          </Typography>
          <Box sx={{
            flexGrow: 1
          }}/>
          {location.pathname === '/' && (
          <Box 
          sx={
            {marginRight:(theme)=> theme.spacing(2)},
            (theme)=>({
                [theme.breakpoints.up('sm')]: {
               display: 'none',
               },
            })
          }>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
