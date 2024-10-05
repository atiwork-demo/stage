// Card.js
import React from "react";
import QRCode from "qrcode.react";

const Card = ({
  isFlipped,
  handleCardClick,
  vCardInfo,
  name,
  age,
  userclass,
  campus,
  logo,
}) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      {isFlipped ? (
        <div className="back">
           <div className="photo-row">
            <img className="logo" src={logo} />
          </div>
          <div className="text-row">
            <h1 className="text-item">{name} ( {age} )</h1> 
            <h2 className="text-item">{userclass}</h2>
            <h3 className="text-item">{campus}</h3>
          </div>
          
         
        </div>  
      ) : (
        <div className="front">
          <QRCode value={vCardInfo} />
        </div>
      )}
    </div>
  );
};

export default Card;
