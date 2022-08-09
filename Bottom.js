import React from "react";

 

import './bottom.css'
import star from '../../images/star.png'
function Bottom({img, title, price, reviewCount, rating, location, openSpots}) {

  // console.log(img)
  // console.log(openSpots)

  let badgeText;

  if(openSpots === 0){
    badgeText="SOLD OUT"
  }
  else if(location==='Online'){
    badgeText="ONLINE"
  }


  return (
  
      <div className="card">
         
      {badgeText && <div className="badge">{badgeText}</div>}
        <img src={`../../images/${img}`} alt="" className="card-image"  />
        <div className="rating">
          <img src={star} alt="" className="star-image" />
          <span>{rating} </span> 
          <span className="gray"> ({reviewCount}) .</span> 
          <span className="gray">{location}</span>
          </div>
          <span>{title}</span>
          <p><span className="bold">${price}</span>/per Person</p>
        
      </div>

  );
}

export default Bottom;
