import React, { useState } from 'react'
import { Grid, Card, Tabs, Tab, Box } from '@mui/material';
import LoginPng from '../../../images/login.png';
import UserSignIn from './UserSignIn';
import UserSignup from './UserSignup';

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

const LoginReg = () => {
    const [value, setValue] = useState(0);

    const tabChangeHandler= (e, newValue)=>{
        setValue(newValue);
    }

    return (
        <>
            <Grid container >
                <Grid lg={6} sm={5} >
                    <img width={600} height={550} src={LoginPng} alt='LoginImage' />
                </Grid>

                <Grid lg={5} sm={6} >
                    <Card sx={{ width: '100%', padding: '20px' }}>
                        <Box>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <h3>User Role</h3>
                                <Tabs value={value}
                                textColor='secondary' 
                                indicatorColor='secondary'
                                onChange={tabChangeHandler}>
                                    <Tab label='Sign In'></Tab>
                                    <Tab label='Sign Up'></Tab>
                                </Tabs>
                            </Box>
                            <TabePanel value={value} index={0}>
                                <UserSignIn />
                            </TabePanel>
                            <TabePanel value={value} index={1}>
                                <UserSignup />
                            </TabePanel>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default LoginReg