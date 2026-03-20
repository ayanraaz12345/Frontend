import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function ProductCart({product}) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 340}}
        image={product.imgUrl}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
          {
            product.name
          }
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
       <Link to={"/product-detail?product_id=3434"}>Detail</Link></Button>
       
      </CardActions>
    </Card>
  );
}
