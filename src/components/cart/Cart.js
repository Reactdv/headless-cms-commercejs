import React from 'react';
import { Box,Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import CartItem from './cartItem/CartItem';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link sx={{
        textDecoration: 'none'
      }} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button 
          style={{
            minWidth:"150px"
          }}
          sx={
          (theme)=>({
            [theme.breakpoints.down("xs")]:{
              marginBottom: '5px'
            },
            [theme.breakpoints.up("xs")]:{
              marginRight: '20px'
            }
          })
          } size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button sx={{
            minWidth: '150px'
          }} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </Box>
    </>
  );

  return (
    <Container>
      <Box sx={
      (theme)=> theme.mixins.toolbar
      } />
      <Typography sx={{
        marginTop: '5%'
      }} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
