import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState({})

    const addToCart=(itemId)=>{
        if(!cartItems[itemId])  //if the cart is empty it executes the  first statement ,if cart is filled with one product then it will executes the else statement 
    {                           //it creates one entry  
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }
    const removeCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    

    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=>product._id === item);
                totalAmount+=itemInfo.price*cartItems[item];
            }

        }
        return totalAmount;
    }

    const ContextValue={ 
          food_list,
          cartItems,
          setCartItems,
          addToCart,
          removeCart,
          getTotalAmount

    }
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;