import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../StoreContext/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  

  const {cartItems,addToCart,removeCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className='food-item-list'>
        <img className='food-item-image' src={image}></img>
          {
            !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>:
            <div className='setcounter'>
              <img onClick={()=>removeCart(id)} src={assets.remove_icon_red}></img>
              <p className='count'>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)} src={ assets.add_icon_green}></img>
            </div>
          }

      </div>
      <div className='food-item-info'>
        <div className='rating'>
          <p className='item-title'>{name}</p>
          <img className='stars' src={assets.rating_starts}></img>

        </div>
        <p className='desc'>{ description}</p>
        <p className='price'>${price}</p>
      
      </div>

    </div>
  )
}

export default FoodItem