import React from 'react';
import { Box,Grid } from '@mui/material';

import Product from './product/Product';


const Products = ({ products, onAddToCart }) => {
  

  if (!products.length) return <p>Loading...</p>;

  return (
    <Box sx={{
    flexGrow: 1,
    backgroundColor:(theme)=> theme.palette.background.default,
    padding:(theme)=> theme.spacing(3)
    }}>
      <Box sx={
       (theme)=> theme.mixins.toolbar
      } />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;

