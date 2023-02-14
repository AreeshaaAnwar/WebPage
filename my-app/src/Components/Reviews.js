import React from "react";
import "./Reviews.css";
import AddHomeIcon from '@mui/icons-material/AddHome';
import KeyIcon from '@mui/icons-material/Key';
import HubIcon from '@mui/icons-material/Hub';

const Reviews = () => {
	return (
		
			<div className="Reviews">
				<div className="Review">
                <div className="AddHomeIcon"> 	<AddHomeIcon sx={{fontSize:'50px'}}/></div>
                <h3 style={{margin:'0 auto'}}>Home For Families</h3>
				
					<p className="review-text">
						"Great platform, very efficient and works really well on both phone
						and web. I think this is the most easiest way of booking
						appointments in Pakistan as it has made the whole process "
					</p>
					{/* <img src={DocImage} alt="Doct" className="Doc"></img> */}
				</div>
				<div className="Review" style={{marginTop:'10px'}}>
                <div className="KeyIcon"> 	<KeyIcon sx={{fontSize:'50px'}}/></div>
                <h3 style={{margin:'0 auto'}}>Home For Bachelor</h3>
				
					<p className="review-text">
						"A very helpful app for booking appointments and searching for the
						required doctors. Has made my life a lot easy. I would strongly
						recommend this to all"
					</p>
					{/* <img src={DocImage2} alt="Doct" className="Doc"></img> */}
				</div>
				<div className="Review" style={{marginTop:'10px'}} >
				<div className="HubIcon"> 	<HubIcon sx={{fontSize:'50px'}}/></div>
                <h3 style={{margin:'0 auto'}}>Networking</h3>
					<p className="review-text">
						"Literally the best website to book the appointments online for
						Doctors. The service is great, helpline guys are very cooperative
						and understanding. And I don't have to hassle through different
						hospitals anymore now."
					</p>
					{/* <img src={DocImage3} alt="D oct" className="Doc"></img> */}
				</div>
			</div>
		
	);
};

export default Reviews;
