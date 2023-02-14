import React from "react";
import "./Companies.css";
import ver from "../Images/slack.png"
import Money from "../Images/Linked.png";
import visa from '../Images/visa.jpg'
import microsoft from '../Images/microsoft.png'



const Companies = () => {
  return (
    <>
      <div className="main6">
       
        <div className="footer">
          <p style={{ color: "grey" }}>
         Trusted by 20,000 + Companies
          </p>
         
        </div>
        <div className="footer-icon">
          <div className="dd">
            <img src={ver} alt="aa" className="footer-image" />
            <div className="after-image">
            <h1>slack</h1>
           
            </div>
          </div>
<div  className="dd">
          <img src={Money} alt="money" className="footer-image" />
          <div className="after-image">
            <h1>Linked</h1>
          
            </div>
            </div>
            <div  className="dd">
         
          <div className="afterimage">
            <h1>Daily News</h1>
            
            </div>
          </div>
          <div  className="dd">
          <img src={visa}  alt="secure" className="footerimage" style={{width:'200px',marginTop:'-20px'}}/>
         
          </div>
          <div className="dd">
            <img src={microsoft} alt="microsorft" className="footer-image" />
            <div className="after-image">
            <h1>microsoft</h1>
           
            </div>
            </div>
          
        </div>
       
      </div>
      
    </>
  );
};

export default Companies;
