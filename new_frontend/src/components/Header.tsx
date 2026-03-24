// import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './shared/Logo';
import Typography from '@mui/material/Typography';

const Header=() => {
    return <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Logo/>
        </Toolbar>
    </AppBar>;
};

export default Header;