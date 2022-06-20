import React, { useState } from 'react'
import { Grid, Card, Tabs, Tab, Box } from '@mui/material';
import AdminSignIn from './AdminSignin';
import AdminSignup from './AdminSignup';
import AdminPng from '../../../images/Admin.png'

const TabePanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role="tabpanel" hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const AdminReg = () => {
    const [value, setValue] = useState(0);

    const tabChangeHandler= (e, newValue)=>{
        setValue(newValue);
    }

    return (
        <>
            <Grid container  >
                <Grid lg={6}  >
                    <img height={470} src={AdminPng} alt='AdminImage' />
                </Grid>

                <Grid lg={5}  >
                    <Card sx={{ width: '100%', padding:'20px' }}>
                        <Box>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <h3>Admin Role</h3>
                                <Tabs value={value}
                                textColor='secondary' 
                                indicatorColor='secondary'
                                onChange={tabChangeHandler}>
                                    <Tab label='Signin'></Tab>
                                    <Tab label='Sign Up'></Tab>
                                </Tabs>
                            </Box>
                            <TabePanel value={value} index={0}>
                                <AdminSignIn />
                            </TabePanel>
                            <TabePanel value={value} index={1}>
                                <AdminSignup />
                            </TabePanel>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default AdminReg;