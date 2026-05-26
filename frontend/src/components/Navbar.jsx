import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
const Navbar = () => {

    return <>
        <AppBar position='static' sx={{background:"#8793d8"}}>
            <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography>E-learn</Typography>
                <Box>
                    <Button component={Link} to="/">Home</Button>
                </Box>
                <Box>
                    <Button component={Link} to="/courses">Courses</Button>
                </Box>
                <Box>
                    <Button component={Link} to="/about">About</Button>
                </Box>
            </Toolbar>
        </AppBar>


    </>
}

export default Navbar