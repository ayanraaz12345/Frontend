import { Button, Typography } from "@mui/material";
import BasicBreadcrumbs from "../../utility components/breadcrumbs/BasicBreadcrumbs";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../../../yupShema/registerSchema";

export default function Register() {
  const initialValues = { email: "",
   username:"",
   phone:"" ,
   password: "" , 
    confirmPassword:""
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: (value) => {
      console.log("submitted value is for registered", value);


    }
  })


  return (
    <>
      <BasicBreadcrumbs text={"Register"} />


      <Box
        component="form"

        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", marginTop: "40px", maxWidth: "500px", minHeight: "300px", margin: "auto", background: "#f3f2f3", padding: "10px", marginBottom: "40px" }}

      onSubmit={Formik.handleSubmit}

      >
       <Typography variant="h4">Register</Typography>
       <TextField name="email" value={Formik.values.email}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          fullWidth sx={{ marginTop: "5px" }} id="filled-basic" label="Email" variant="filled" />
        {Formik.errors.email && Formik.touched.email && <Typography sx={{ color: "red" }}> {
          Formik.errors.email
        }</Typography>}

      
       
        <TextField name="username" value={Formik.values.username}
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
         label="username:" 
         variant="filled" fullWidth sx={{marginTop:"5px"}} id="filled-basic"/>
          {Formik.errors.username && Formik.touched.username && <Typography sx={{ color: "red" }}> {
          Formik.errors.username
        }</Typography>}
     
     <TextField name="phone" value={Formik.values.phone}
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
         label="phone:" 
         variant="filled" fullWidth sx={{marginTop:"5px"}} id="filled-basic3"/>
          {Formik.errors.phone && Formik.touched.phone && <Typography sx={{ color: "red" }}> {
          Formik.errors.phone
        }</Typography>}
        <TextField name="password"
        type="password"
        value={Formik.values.password}
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
        fullWidth sx={{ marginTop: "5px" }}  id="outlined-basic4" label="Password" variant="filled" />
        {Formik.errors.password && Formik.touched.password && <Typography sx={{ color: "red" }}> {
          Formik.errors.password
        }</Typography>}


        <TextField name ="confirmPassword"  type="password" value={Formik.values.confirmPassword}
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
         label="confirmPassword" 
         variant="filled" fullWidth sx={{marginTop:"5px"}} id="filled-basic"/>
          {Formik.errors.confirmPassword && Formik.touched.confirmPassword && <Typography sx={{ color: "red" }}> {
          Formik.errors.confirmPassword
        }</Typography>}
         
         

         
       
       
        <Button type="submit" sx={{ marginTop: "5px" }} variant="contained">Submit</Button>
        <Link to={"/login"}>Already have an account ?Login</Link>

      </Box>
    </>
  )
}




