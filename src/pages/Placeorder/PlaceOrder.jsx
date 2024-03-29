import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/StoreContext/StoreContext'

const PlaceOrder = () => {
  
  
 return (
    <form className='placeorder'>
      <div className="placeorder-left">
        <div className="placeorder-cont">
          <h3>Delviry Information</h3>
          <div className="placeorder-details">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <div className="placeorder-mail">
            <input type='email' placeholder='Enter Your Mail Address'></input>
          </div>
          <div className="placeorder-street">
            <input type="text" placeholder='Street'></input>
          </div>
          <div className="placeorder-address">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="placeorder-zipcode">
            <input type="text" placeholder='Zip-Code'></input>
            <input type="text" placeholder='Country'></input>
          </div>
          <div className="placeorder-number">
            <input type="number" placeholder="Mobile"></input>
          </div>

        </div>
      </div>
      <div className="placeorder-right">
        <div className="cart-bottom">
          <h3 className='h3'>Cart Total</h3>
          <div className="bottom-cart">
            <div className="cart-details">
              <p className='sub-total' >Sub-Total</p>
              <p className='price-details'>${}</p>
            </div>
            <hr></hr>
            <div className='cart-details'>
              <p className='sub-total'>DelviryFee</p>
              <p className='delviry-fee'> ${5}</p>
            </div>
            <hr></hr>
            <div className='cart-details'>
              <h3 className='sub-total'>Total</h3>
              <p className='price-details'>${ + 5}</p>
            </div>
            <button className='checkout-btn'>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder