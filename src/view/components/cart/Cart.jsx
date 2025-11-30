import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicBreadcrumbs from '../../utility components/breadcrumbs/BasicBreadcrumbs';

function createData(name, calories, fat, carbs, protein,price) {
  return { name, calories, fat, carbs, protein,price };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,23),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,23),
  createData('Eclair', 262, 16.0, 24, 6.0,23),
  createData('Cupcake', 305, 3.7, 67, 4.3,23),
  createData('Gingerbread', 356, 16.0, 49, 3.9,23),
];

export default function Cart() {
  return (
   <>
   <BasicBreadcrumbs text={"cart"}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Price Rate</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
          <TableRow
             
             
            >
              <TableCell colSpan={5} component="th" scope="row">
             
              </TableCell>
              
              <TableCell align="right">Grand Total:3000</TableCell>
              
            </TableRow>
        </TableBody>

        
      </Table>
    </TableContainer>
    </>
  );
 
}

