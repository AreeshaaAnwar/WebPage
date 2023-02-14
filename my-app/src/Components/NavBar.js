// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import "./NavBar.css";
import { useState } from "react";


function NavBar() {

  const [anchorElNav, setAnchorElNav] = useState(null);



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color:'white',
              lineHeight:'20px',
              marginLeft:'70px'
            }}
          >
            
             irvan<br></br>moses
           
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              lineHeight:'20px'
            }}
          >
           
           irvan<br></br>moses
          
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
         

            
              <>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", marginRight: "20px", marginTop: "20px",fontSize:'20px' }}
                >
                 Home
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white",marginRight: "20px", marginTop: "20px",fontSize:'20px' }}
                >
                 Features
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", marginRight: "20px", marginTop: "20px",fontSize:'20px'}}
                >
                 Pricing
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", marginRight: "20px", marginTop: "20px",fontSize:'20px' }}
                >
                 About
                </Typography>
               
                <Button
                  className="logout"
                  
                  sx={{
                    my: 2,
                    color: "white",
                  
                    display: "block",
                    marginRight: "20px",
                    border: "1px solid white",
                    borderRadius: "10px",
                    '&:hover': {
                      backgroundColor: 'orange', color:'white', border:'1px solid white' }
                  }}
                >
                  Login
                </Button>
               
                <Button
                  className="bell"
                
                  sx={{
                    my: 2,
                    color: "white",
                  
                    display: "block",
                    marginRight: "20px",
                    border: "1px solid white",
                    borderRadius: "10px",
                    '&:hover': {
                      backgroundColor: 'orange', color:'white', border:'1px solid white' }
                  }}
                >
                SignUp
                </Button>
              </>
          
          </Box>

          <Box sx={{ flexGrow: -2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              <Box
                style={{
                  paddingLeft: "30px",
                  paddingRight: "10px",
                  paddingBottom: "70px",
                
                 
                }}
              >
            
                  <>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ color: "grey", padding: "10px", marginTop: "13px" ,marginLeft:'20px'}}
                    >
                      Home
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ color: "grey", padding: "10px", marginTop: "13px",marginLeft:'15px' }}
                    >
                      Features
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ color: "grey", padding: "10px", marginTop: "13px",marginLeft:'20px' }}
                    >
                      Pricing
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ color: "grey", padding: "10px", marginTop: "13px",marginLeft:'20px' }}
                    >
                      About
                    </Typography>
                  
                    <Button
                      className="logout"
               
                      sx={{
                        my: 2,
                        color: "grey",
                      border:'2px solid grey',
                        display: "block",
                        width: "100px",
                        borderRadius: "10px",
                        marginLeft: "20px",
                        '&:hover': {
                      backgroundColor: 'orange', color:'white', border:'1px solid white' }
                      }}
                      
                    >
                      Login
                    </Button>
                
                    <Button
                      className="bell"
                  
                      sx={{
                        my: 2,
                        color: "grey",
                      border:'2px solid grey',
                        display: "block",
                        borderRadius: "10px",
                        marginLeft: "20px",
                        width: "100px",
                        '&:hover': {
                      backgroundColor: 'orange', color:'white', border:'1px solid white' }
                      }}
                    >
                      SignUp
                    </Button>
                  </>
               
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
