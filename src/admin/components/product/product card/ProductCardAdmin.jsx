import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';



export default function ProductCardAdmin({product}) {
  return (
    <Card sx={{ maxWidth: 345}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="340px"
        
        image={"https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_640.jpg"}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
          {
            
          }
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"variant='contained' sx={{color:"white", background:"lightblue"}}>
       <Link to={"/admin/product-details?product_id=3434"}>Details</Link></Button>
       <Button size="small"variant='contained' sx={{color:"white", background:"skyblue"}}>
       {/*<Link to={"/product-detail?product_id=3434"}>Detail</Link>*/}Edit</Button>
       <Button size="small"variant='contained' sx={{color:"white", background:"tomato"}}>
       {/*<Link to={"/product-detail?product_id=3434"}>Delete</Link>*/} Delete</Button>
       
      </CardActions>
    </Card>
  );
}
