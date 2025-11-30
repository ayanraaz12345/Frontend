import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ flexGrow: 1, background: "#4379F2 " }}>
      <Grid sx={{ minHeight: "230px", justifyContent: "center", alignItems: "center" }} container spacing={0}>
        <Grid item xs={4}>
          <h2 style={{ color: "#fff" }}>coolguy99</h2>
        </Grid>
        <Grid item xs={4}>
          <h3 style={{ color: "#fff" }}>Copyright @2024</h3>
        </Grid>
        <Grid item xs={4}>
          <BottomNavigation
            sx={{ background:"transparent" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Grid>

      </Grid>
    </Box>
  );
}
