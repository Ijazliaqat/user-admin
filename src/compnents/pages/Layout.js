import { Outlet } from 'react-router-dom'
import { CssBaseline } from "@mui/material";
import React from 'react'
import Navbar from '../Navbar'


const Layout = () => {
    return (
        <>
        <CssBaseline />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout