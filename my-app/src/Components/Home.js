import React from 'react'
import './Home.css'
import NavBar from './NavBar'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import Companies from './Companies';
import Services from './Services';


const Home = () => {
  return (
    <div>
        <section className='home'>
        <NavBar/>
        <div className="container">
          <div className="centered">
            <h1 style={{ color: "white",textAlign:'center',fontFamily:'sans-serif'}}>
              Find Your Best Real Estate
            </h1>
           <p style={{color:'white'}}>we handle everything to you under one roof.No yo finally save all the stress,time <br></br>and extra hidden costs,ith hundred of design possibilities from leading architects</p>
           <form >
              <input
                type="text"
                
                className="inp"
              
                name="search"
             
              />
              <div className='inner'>
                <p>City/streets</p>
                <h5>Newyork</h5>
                
              </div>
              <div className='inner1'>
                <p>PropertyType</p>
                <h5>Minimilist</h5>
              </div>
              <div className='inner2'>
                <p>PriceRange</p>
                <h5>$10,000-$20,000</h5>
              </div>
              <div className='icons' style={{marginLeft:'500px',marginTop:'-43px'}}>
            <IconButton sx={{backgroundColor:'black',color:'white', '&:hover': {
                      backgroundColor: 'white', color:'black', border:'1px solid black' }}}>
                <SearchIcon/>
            </IconButton>
            </div>
              
            </form>
          
          </div>
        </div>
        </section>
        <Companies/>
        <Services/>
     
    </div>

  )
}

export default Home