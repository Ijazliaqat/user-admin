import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <Box sx={{flexGrow:1}} >
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <Typography variant='h5' component="div" sx={{flexGrow:1}} >
                        Orcalo Holdings
                    </Typography>
                    <Button component={NavLink } to='/' sx={{color:'white'}}></Button>
                    <Button component={NavLink } to='/admin' sx={{color:'white'}}>Admin</Button>
                    <Button component={NavLink } to='/login' sx={{color:'white'}}>User</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar