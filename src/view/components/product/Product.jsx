import { Box, Grid, TextField, Typography } from "@mui/material";
import BasicBreadcrumbs from "../../utility components/breadcrumbs/BasicBreadcrumbs";
import { useState } from "react";
import ProductCart from "./productcart/ProductCart";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { brandData, categoryData } from "./Data";


export default function Product() {
   const [products, setProduct] = useState([
      {
         id: 1,
         name: "Product 1",
         imgUrl: "https://cdn.pixabay.com/photo/2016/03/31/19/24/clothes-1294978_640.png"
      },
      {
         id: 2,
         name: "Product 2",
         imgUrl: "https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_640.png"
      },
      {
         id: 3,
         name: "Product 3",
         imgUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/34/shirt-150087_640.png"
      },
      {
         id: 4,
         name: "product 4",
         imgUrl: "https://cdn.pixabay.com/photo/2024/08/05/17/20/shirt-8947376_640.jpg"
      }

   ]);
   const [categories, setCategories] = useState(categoryData);
   const [brands, setBrands] = useState(brandData);

   const categoryHandle = (e, id) => {
      console.log("clicked here", e.target.checked, id);

   }
   const brandHandle = (e, id) => {
      console.log("brand clicked", e.target.checked, id)

   }
   const searchHandle = (e) => {
      console.log(e.target.value);


   }

   return (
      <>
         <BasicBreadcrumbs text={"Product"} />


         <Grid container sx={{ minHeight: "540px" }}>
            <Grid sx={{ background: "#f3f2f1", padding: "5px" }} item xs={12} sm={4} md={2}>
               <FormGroup>
                  <Typography variant="h5">Category</Typography>
                  {
                     categories && categories.map((category, i) => {
                        return (
                           <FormControlLabel key={i} onClick={(e) => { categoryHandle(e, category.id) }} control={<Checkbox />} label={category.name} />)
                     })
                  }


               </FormGroup>
               <FormGroup>
                  <Typography variant="h5">Brand</Typography>
                  {
                     brands && brands.map((brand, i) => {
                        return (
                           <FormControlLabel key={i} onClick={(e) => { brandHandle(e, brand.id) }} control={<Checkbox />} label={brand.name} />)
                     })
                  }


               </FormGroup>




            </Grid>


            <Grid item xs={12} sm={20} md={8}>
               <Box
                  component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                  noValidate
                  autoComplete="off"
               >
                  <TextField sx={{minWidth:"124%"}} onKeyUp={(e) => { searchHandle(e) }} label="search..." variant="outlined" />

               </Box>
               <Box className="d-flex flex-row flex-wrap">
                  {


                     products && products.map((product, i) => {
                        return (
                           <>
                              <ProductCart key={i} product={product} />
                           </>
                        )
                     })
                  }

               </Box>


            </Grid>
         </Grid>



      </>
   )
}