import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/StoreContext/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeCart,getTotalAmount } = useContext(StoreContext)
const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className="cart-cont">
        <div className="cart-cont-items">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p className='total'>Total</p>
          <p className='remove'>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className='cart-items'>
                  <img src={item.image}></img>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeCart(item._id)} className='cross'>x</p>
                  <hr></hr>
                </div>
              )
            }

          })
        }
      </div>
      <div className='cart-bottom'>
        <div className='cart-bottom-cont'>
          <h3 className='h3'>Cart Total</h3>
          <div className='bottom-cart'>
            <div className='cart-details'>
              <p className='sub-total'>Sub Total</p>
              <p className='price-details'>${getTotalAmount()}</p>
            </div>
            <hr></hr>
            <div className='cart-details'>
              <p className='sub-total'>DelviryFee</p>
              <p className='delviry-fee'> ${getTotalAmount()===0?0:5}</p>
            </div>
            <hr></hr>
            <div className='cart-details'>
              <h3 className='sub-total'>Total</h3>
              <p className='price-details'>${getTotalAmount()===0?0:getTotalAmount()+5}</p>
            </div>

            <button onClick={()=>navigate('/placeOrder')} className='checkout-btn'>Proceed To CheckOut</button>
          </div>
        </div>
        <div className="cart-promocode">
          <p>if you have a promocode enter it here!</p>
          <div className='promocode-holder'>
            <input type='text' placeholder='Enter The Promocode'></input>
         
          </div>
          <button className='btn-submit'>Submit</button>



        </div>
      </div>

    </div>
  )
}

export default Cart