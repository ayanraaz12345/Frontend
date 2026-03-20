import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './Hero.css'

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
   }),
}));

export default function Hero() {
   return (
      <Box sx={{ flexGrow: 1, minHeight: "500px",background:"#DBF1FD" }}>
         <Grid sx={{ minHeight: "500px" }} container spacing={1} >
            <Grid className='hero-image-background d-flex justify-content-center align-items-center' item xs={11} md={8}>
               <Stack spacing={2} direction="row">

                  <Button variant="contained">Shop Now</Button>

               </Stack>

            </Grid>
            <Grid className='d-flex justify-content-center align-items-center  ' style={{background:"#0B536B"}} item xs={12} md={4}>
               <Typography variant='h2'> welcome back</Typography>
            </Grid>

         </Grid>
      </Box>
   );
}
