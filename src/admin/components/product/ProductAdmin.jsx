import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { productSchema } from '../../../yupShema/productSchema';
import { Button, Grid, Grid2, Typography } from '@mui/material';
import ProductCardAdmin from './product card/productCardAdmin';



export default function ProductAdmin() {
   const [newProduct,setNewProduct] =React.useState(false)
   const [image,setImage]=React.useState(null)
   const initialValues = {
      name: "",
      title: "",
      description:"",
      price: 0,
      color: "",
      category: "",
      brand: "",
      size: "",
      quantity: 0


   }
     const addImage =(e)=>{
      const file=e.target.files[0];
      setImage(file)

     }

   const Formik = useFormik({
      initialValues: initialValues,
      validationSchema: productSchema,
      onSubmit: (value) => {
         console.log("The all products are",image, value);

      }
   });

   return (
      <>
         <h1>product admin</h1>
         {
            newProduct &&   <Box 
            component="form"
           
            noValidate
            autoComplete="off"
            sx={{background:"#f2f2f0",padding:"15px"}}
            method='post'
            
            onSubmit={Formik.handleSubmit}
           
         >
         <Grid container spacing={1}> 
         <Grid item xs={12} sm={6}>
         <TextField
            fullWidth
               name='name'
               label='name'
               value={Formik.values.name}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined'
            />
            {Formik.touched.name &&  Formik.errors.name ?<p style={{color:"tomato"}}>{Formik.errors.name}</p>:""}

         </Grid>
         <Grid item  xs={12} sm={6}>
         <TextField
            fullWidth
               name='title'
               label='title'
               value={Formik.values.title}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined'

            />
             {Formik.touched.title &&  Formik.errors.title ?<p style={{color:"tomato"}}>{Formik.errors.title}</p>:""}
           

            
         </Grid>
         <Grid item  xs={12}>

         <TextField
            fullWidth
            multiline
            rows={4}
               name='description'
               label='description'
               value={Formik.values.description}
               onChange={Formik.handleChange}
               
               onBlur={Formik.handleBlur}
            
               variant='outlined' />
        {Formik.touched.description &&  Formik.errors.description ?<p style={{color:"tomato"}}>{Formik.errors.description}</p>:""}

            
         </Grid>


         <Grid item  xs={12} sm={6}>
         <Typography variant='h4'> Add Image</Typography>
           
         <TextField
        
            fullWidth
               name='brand'
              
               type='file'
              
               onChange={(e)=>{addImage(e)}}
              
               variant='outlined' />
             {/*Formik.touched.size &&  Formik.errors.size ?<p style={{color:"tomato"}}>{Formik.errors.size}</p>:""*/}
           
            
         </Grid>
         <Grid item  xs={12} sm={6}>
         <TextField
            fullWidth
               name='price'
               label='price'
               value={Formik.values.price}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined'
            />
            {Formik.touched.price &&  Formik.errors.price ?<p style={{color:"tomato"}}>{Formik.errors.price}</p>:""}
           
            
         </Grid>
         <Grid item  xs={12} sm={6}>
         <TextField
            fullWidth
               name='color'
               label='color'
               value={Formik.values.color}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined' />
                {Formik.touched.color &&  Formik.errors.color ?<p style={{color:"tomato"}}>{Formik.errors.color}</p>:""}
            
         </Grid>
         <Grid item  xs={12} sm={6}>
            
         <TextField
            fullWidth
               name='category'
               label='category'
               value={Formik.values.category}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined' />
                {Formik.touched.category &&  Formik.errors.category ?<p style={{color:"tomato"}}>{Formik.errors.category}</p>:""}
           
            

            
         </Grid>
         <Grid item  xs={12} sm={6}>
         <TextField
            fullWidth
               name='brand'
               label='brand'
               value={Formik.values.brand}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined' />
            {Formik.touched.brand &&  Formik.errors.brand ?<p style={{color:"tomato"}}>{Formik.errors.brand}</p>:""}
           
                     
            
         </Grid>
         <Grid item  xs={12} sm={6}>
           
         <TextField
            fullWidth
               name='size'
               label='size'
               value={Formik.values.size}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined' />
             {Formik.touched.size &&  Formik.errors.size ?<p style={{color:"tomato"}}>{Formik.errors.size}</p>:""}
           
            
         </Grid>

         <Grid item  xs={12} sm={6}>
         <TextField
            fullWidth
               name='quantity'
               label='quantity'
               value={Formik.values.quantity}
               onChange={Formik.handleChange}
               onBlur={Formik.handleBlur}
               variant='outlined' />
             {Formik.touched.quantity &&  Formik.errors.quantity ?<p style={{color:"tomato"}}>{Formik.errors.quantity}</p>:""}
            
         </Grid>
         <Grid item xs={12}>
         <Button type='submit' variant='outlined' >Submit</Button>
         <Button variant='outlined' style={{marginLeft:"4px"}} onClick={()=>{setNewProduct(false)}}>Cancel</Button>
           
         </Grid>
         </Grid>

             


         </Box>
         }
         {!newProduct &&  <Button style={{background:"lightblue", color:"black",}}  variant='outlined'onClick={()=>{setNewProduct (true)}}> Add New</Button> }

         <Box sx={{display:"flex" ,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
         {[1,2,3,4].map((item,index)=>{
            return <ProductCardAdmin/>
         })}
        
         </Box>

         
        
      </>
   )
}