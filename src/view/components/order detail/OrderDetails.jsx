import { useEffect, useState } from "react"
import BasicBreadcrumbs from "../../utility components/breadcrumbs/BasicBreadcrumbs";
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { red } from "@mui/material/colors";


export default function OrderDetails( ) {

   const [orders, setOrder] = useState(null);


   useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const orderId= urlParams.get("order_id");
      console.log("order ID", orderId);
      setOrder({
         date: "24-jun-2024",
        transactionId:"989762782882y#456336",
         paymentStatus:"Paid",
         orderStatus:"Pending",
         products:[
            {id:1,name:'T-shirt',price:23,quantity:2 },
            {id:2,name:'Paint',price:23,quantity:3},
            {id:3,name:' Jeans',price:23,quantity:4},
         ]
      })


   }, [])
   return (

      <>
         <h1>Product Deatils</h1>
         <BasicBreadcrumbs text={"Order detail"} />
         
               {orders &&
               <>
                <TableContainer component={Paper}>

                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

                     <TableBody>

                        <TableRow>


                           <TableCell sx={{fontWeight:"700"}} align="right">{"Date"}</TableCell>
                           <TableCell align="right">{orders.date}</TableCell>
                        </TableRow>
                        <TableRow>


                           <TableCell sx={{fontWeight:"700"}} align="right">{"Transaction Id"}</TableCell>
                           <TableCell align="right">{orders.transactionId}</TableCell>
                        </TableRow>
                        <TableRow>


   
              <TableCell sx={{fontWeight:"700"}} align="right">{"Payment Status"}</TableCell>
           <TableCell align="right">{orders.paymentStatus}</TableCell>
                          </TableRow>
                          <TableRow>


   
<TableCell sx={{fontWeight:"700"}} align="right">{"Order Status"}</TableCell>
<TableCell align="right">{orders.orderStatus}</TableCell>
            </TableRow>



                     </TableBody>
                  </Table>
               </TableContainer>

       <Typography variant="h4" sx={{margin:"auto",textAlign:"center",marginTop:"20px"}}> Products</Typography>
               <TableContainer component={Paper}>

<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

  
   <TableHead>
      <TableRow>
      <TableCell sx={{fontWeight:"700"}} align="right">Name</TableCell>
         <TableCell align="right">price Rate</TableCell>
         <TableCell align="right">Quantity</TableCell>
         <TableCell align="right">Price</TableCell>



      </TableRow>
   </TableHead>
   <TableBody>
   {
      orders && orders.products.map((product,i)=>{
         return(
            <TableRow>
            <TableCell align="right" >{product.name}</TableCell>
         <TableCell align="right">{product.price}</TableCell>
         <TableCell align="right">{product.quantity}</TableCell>
         <TableCell align="right">{product.price*product.quantity}</TableCell>



         
      </TableRow>
      
         )

      })
   }

      



   </TableBody>
</Table>
</TableContainer>
               </>


               }


         



      </>)


}

