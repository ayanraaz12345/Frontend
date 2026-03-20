
import *as yup from 'yup';
export const  registerSchema= yup.object({
   email:yup.string().email("it must be an email").required("email.required"),
   username:yup.string().required("Userfilled is required"),
   phone:yup.string().required("Number is required"),
   password:yup.string().min(8,"Must contained 8 character").required("password filled is required"),
   confirmPassword:yup.string().oneOf([yup.ref("password"),null],"password must matched").required("confirmed password required")
   
})