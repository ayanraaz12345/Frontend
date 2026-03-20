import { Button, Typography } from "@mui/material";
import BasicBreadcrumbs from "../../utility components/breadcrumbs/BasicBreadcrumbs";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../../yupShema/loginSchema";

export default function Login() {
  const initialValues = { email: "", password: "" }
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (value) => {
      console.log("submitted value is for login", value);


    }
  })


  return (
    <>
      <BasicBreadcrumbs text={"log in"} />


      <Box
        component="form"

        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", marginTop: "40px", maxWidth: "500px", minHeight: "300px", margin: "auto", background: "#f3f2f3", padding: "10px", marginBottom: "40px" }}

      onSubmit={Formik.handleSubmit}

      >
        <Typography variant="h4">Log in</Typography>
        <TextField name="email" value={Formik.values.email}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          fullWidth sx={{ marginTop: "5px" }} id="filled-basic" label="Email" variant="filled" />
        {Formik.errors.email && Formik.touched.email && <Typography sx={{ color: "red" }}> {
          Formik.errors.email
        }</Typography>}

        <TextField name="password"
        type="password"
        value={Formik.values.password}
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
        fullWidth sx={{ marginTop: "5px" }}  id="outlined-basic" label="Password" variant="filled" />
        {Formik.errors.password && Formik.touched.password && <Typography sx={{ color: "red" }}> {
          Formik.errors.password
        }</Typography>}

        <Button type="submit" sx={{ marginTop: "5px" }} variant="contained">Submit</Button>
        <Link to={"/register"}>Dont't have an account?register</Link>

      </Box>
    </>
  )
}




