import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import Cart from "../pages/cart/Cart";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>
{
    const[cartItems , setCartItems]=useState({});


    const addToCart=(itemID)=>{
        if(!cartItems[itemID]){
            setCartItems((prev)=>({...prev,[itemID]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        }

    }

    const removeFromCart=(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))

    }

    const getCartTotal=()=>{
        let totalamount = 0;


             for (const item in cartItems){
                        if(cartItems[item]>0){
                let iteminfo= food_list.find((product)=>product._id===item);
                totalamount+= iteminfo.price*cartItems[item];
        }            
        }
        return totalamount;
    }

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartTotal
    }
     return(
        <StoreContext.Provider value={contextValue}>

            {props.children}
        </StoreContext.Provider>
     )
}

export default StoreContextProvider;
