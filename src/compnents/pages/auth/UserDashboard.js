import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
  const navigate= useNavigate();
  const logoutHandle = ()=> {
    console.log('Log Out');
    navigate('/')
  }
  return (
    <div>
      <Box sx={{flexGrow:1}} >
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <Typography variant='h5' component="div" sx={{flexGrow:1}} >
                        Orcalo Holdings
                    </Typography>
                    <Button onClick={logoutHandle} sx={{color:'white'}}>Log Out</Button>
                </Toolbar>

            </AppBar>
        </Box>
    </div>
  )
}

export default UserDashboard