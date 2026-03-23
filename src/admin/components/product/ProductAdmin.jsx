import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { productSchema } from '../../../yupShema/productSchema';
import { Button, Grid, Typography } from '@mui/material';
import ProductCardAdmin from "./product-card/ProductCardAdmin"; // ✅ added

export default function ProductAdmin() {
   const [newProduct, setNewProduct] = React.useState(false)
   const [image, setImage] = React.useState(null)

   const initialValues = {
      name: "",
      title: "",
      description: "",
      price: 0,
      color: "",
      category: "",
      brand: "",
      size: "",
      quantity: 0
   }

   const addImage = (e) => {
      const file = e.target.files[0];
      setImage(file)
   }

   const Formik = useFormik({
      initialValues: initialValues,
      validationSchema: productSchema,
      onSubmit: (value) => {
         console.log("The all products are", image, value);
      }
   });

   return (
      <>
         <h1>product admin</h1>

         {newProduct && (
            <Box component="form" noValidate autoComplete="off"
               sx={{ background: "#f2f2f0", padding: "15px" }}
               onSubmit={Formik.handleSubmit}
            >
               <Grid container spacing={1}>
                  <Grid item xs={12}>
                     <TextField fullWidth name='name' label='name'
                        value={Formik.values.name}
                        onChange={Formik.handleChange}
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <Button type='submit'>Submit</Button>
                     <Button onClick={() => setNewProduct(false)}>Cancel</Button>
                  </Grid>
               </Grid>
            </Box>
         )}

         {!newProduct && (
            <Button onClick={() => setNewProduct(true)}>
               Add New
            </Button>
         )}

         <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {[1, 2, 3].map((item) => (
               <ProductCardAdmin key={item} />
            ))}
         </Box>
      </>
   )
}