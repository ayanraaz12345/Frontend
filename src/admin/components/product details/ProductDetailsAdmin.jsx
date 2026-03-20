import { useEffect, useState } from "react"
import CardMedia from '@mui/material/CardMedia';
import { Grid } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { red } from "@mui/material/colors";


export default function ProductDetailsAdmin({ productData }) {

   const [product, setProduct] = useState(null);


   useEffect(() => { 
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const productId = urlParams.get("product_id");
      console.log("productId", productId);
      setProduct({
         name: "T-shirt",
         title: "T-shirt for Gens",
         description: "This is very Faishonable tshirt"

      })


   }, [])
   return (

      <>
         <h1>Product Deatils</h1>
         
         <Grid container sx={{minHeight:"500px"}}>
            <Grid sx={{display:"flex",alignItems:"center",justifyContent:"center",background:"#f2f2f2"}} item  xs={12} sm={6}>
               <img
                  component="img"
                  //height="240"
                  src="https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_640.png"
                  alt="Paella dish"
                  style={{height:"330px"}}
               />

            </Grid>
            <Grid item sx={12} md={6} >
               {product && <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

                     <TableBody>

                        <TableRow

                        >


                           <TableCell sx={{fontWeight:"700"}} align="right">{"name"}</TableCell>
                           <TableCell align="right">{product.name}</TableCell>
                        </TableRow>

                     </TableBody>
                  </Table>
               </TableContainer>


               }



            </Grid>
         </Grid>



      </>)


}

