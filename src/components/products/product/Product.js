import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

console.log(product)
  return (
    <Card sx={{
      maxWidth:"100%"
    }}>
      <CardMedia sx={{
        width:"345px",
        height:300,
        backgroundColor:"green",
        transform:"scale(0.5)",
        paddingTop: '56.25%',
        objectFit:"contain",
      }} image={product.image.url} 
       title={product.name} />
      <CardContent>
        <div sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing 
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

