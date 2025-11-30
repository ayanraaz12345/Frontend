import *as yup from 'yup';
export const productSchema = yup.object({
   name: yup.string().min(4, "Minimu 4 character are required").max(12, "Maximum 12 character are reqyired").required("name is required"),
   title: yup.string().min(10, "minimum 10 character are required").max(20, "maximum 20 character are accepeted").required("title is required "),
   description: yup.string().min(24,"minmum 24 character are required.").required("Description are required"),
   price: yup.number("price will be number only").required("number is required"),
   color: yup.string().min(2, "minimu 2 character are required").required("colors are  required"),
   category: yup.string().min(2, "minmum 2 character are required").required("Category are required"),
   brand: yup.string().min(2, "minimum 2 character are required").required("brand is required "),
   size: yup.string().required("size is required"),
   quantity: yup.number("price will be number only").required("quantity is required")



})