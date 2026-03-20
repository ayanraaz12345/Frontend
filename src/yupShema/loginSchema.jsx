import *as yup from 'yup';
export const  loginSchema= yup.object({
   email:yup.string().email("it must be an email").required("email.required"),
   password:yup.string().required("password filled is required")
   
})