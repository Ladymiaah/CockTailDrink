import React from 'react'
import {Box, Typography} from '@mui/material'

const Style = () => {
  return (
    <Box sx={{ mt: { lg: '150px', xs: '50px' }, ml: { sm: '30px' } }} position="absolute" p="20px">
    <Typography fontWeight={800} sx={{ opacity:'0.3', fontSize: { lg: '45px', xs: '30px' } }} mb="150px" mt="10px" >
      Party, Drink<br />
      and Merry
    </Typography>
    <Typography fontWeight={800} color="#FF2625" 
    sx={{ opacity: '0.2', fontSize: '100px' }}>
      Best Cocktail
    </Typography>
  </Box>
);  
}

export default Style