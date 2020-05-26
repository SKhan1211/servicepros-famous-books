import React, { useEffect } from 'react';

import MyLogo from "../../../../assets/images/my_logo.png";


const PurchaseEffect = () => {
  useEffect(() => {

  })

  return (
    <div className="purchase__outer-container">
      <img src={MyLogo}></img>
      <form>
        <h1>Confirm Purchase</h1>
        <label>Card Number
          <input type="text"></input>
        </label>        
        <div className="purchase__expiry-container">
          <label>Valid Through
            <input type="text"></input>
          </label>
          <label>CVV
            <input type="text"></input>
          </label>
        </div>
        <button onClick={(e) => e.preventDefault()}>Confirm Purchase</button>
      </form>
    </div>
  )
};

export default PurchaseEffect;