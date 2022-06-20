import React from 'react';
import {Grid} from '@mui/material';
import UserImg from '../../images/user.png'
import { Box } from '@mui/system';

const Home = () => {
  return (
    <>
      <Grid container  >
        <Box lg={3} >
          <img className='UserImg' src={UserImg} alt='LoginImage' />
        </Box>
        <Box lg={3} sx={{mt:5}} >
          <h1>Orcalo Holdings</h1>
          <h2>React Training</h2>


        </Box>
      </Grid>
    </>
  )
}

export default Home