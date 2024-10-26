import { LOGO_URL } from "../utils/constants";
import logo from "../images/Home-page/Header/logo.png"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () =>{

    // let btnName = "Login"

    // console.log("header renderd");
    const [btnNameReact ,setBtnNameReact] = useState("Login");

    useEffect(() =>{
        // console.log("useEffect  called");
    } ,[btnNameReact]);

    
    return (    

        <div className="header">
            {/* <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
 

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>   */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr:-1 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <div className="logo-container">
                        <img className="logo" src={LOGO_URL}/>
                    </div>


                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/**this empty box */}
                    </Typography>


                    <Link to="/" style={{textDecoration:"none" , color:"inherit "}}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    
                   <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">Cart </Button>
                   </Link>
                    


                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">About us</Button>
                    </Link>

        
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">Contact us</Button>
                    </Link>
                   
                    
                    <Button color="inherit"
                            onClick={() =>{
                                btnNameReact==="LogOut" ? setBtnNameReact("Login") : setBtnNameReact("LogOut");
                            }}
                        >
                            {btnNameReact}
                    </Button>
                </Toolbar>
            </AppBar> 
        </Box>
        
        </div>
    );
};

export default Header;