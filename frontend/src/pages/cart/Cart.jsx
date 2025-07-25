import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/storeContext'
const Cart = () => {

  const{food_list, cartItems,setCartItems,addToCart, removeFromCart , getCartTotal}=useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div className="start">
                <div className="cart-items-title cart-items-item">              
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${cartItems[item._id]*item.price}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />
              </div>
             
            )
          }


        })}
      </div>
      <div className="cart-bottom">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
        <div className="cart-promocode">
        <div className='cart-promocode-border'>
          <p>If you have an Promocode , Enter it here..</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Promocode' />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
        
      </div>
      
      
    </div>
  )
}

export default Cart
