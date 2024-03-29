import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p>choose from a diverse menu featuring a delicious array of dishes carted with finest ingredients and culinary expertise .Our mission is to satisfy your cravings and elevate your dining experience ,one delicious meal at a time</p>

<div className='explore-menu-list'>
    {
        menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}></img>
                    <p className='item-name'>{item.menu_name}</p>

                </div>
            )
        })
    }

</div>
<hr></hr>

    </div>
  )
}

export default ExploreMenu