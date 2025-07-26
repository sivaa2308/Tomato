import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {
  const {getCartTotal}=useContext(StoreContext);
  return (
    <form className='placeorder'>

      <div className="placeorder-left">
        <p>Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder='FirstName' required />
          <input type="text" placeholder='LastName' required/>
        </div>
        <input type="email" placeholder='Email' required />
        <input type="text" placeholder='Street' />
        <div className="multifields">
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required/>
        </div>
        <div className="multifields">
          <input type="text" placeholder='ZipCode' required />
          <input type="text" placeholder='Country' required/>
        </div>
        <input type="text" placeholder='Phone' />

      </div>

      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Sub Total</p>
            <p>${getCartTotal()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getCartTotal()>0?2:0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <p>${getCartTotal()>0?getCartTotal()+2:0}</p>
          </div>
          <button onClick={()=>navigate("/placeOrder")}>PROCEED TO PAYMENT</button>
        </div>

      </div>

    </form>
  )
}

export default PlaceOrder
