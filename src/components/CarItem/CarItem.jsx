import React, { useContext } from 'react'
import './CarItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const CarItem = ({id, name, price, description, image}) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div className='car-item'>
        <div className="car-item-img-container">
            <img className='car-item-image' src={image} alt="" />
            {!cartItems[id]
                ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                :<div className='car-item-counter'>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="car-item-info">
            <div className="car-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="car-item-desc">{description}</p>
            <p className="car-item-price">${price}</p>
        </div>
    </div>
  )
}

export default CarItem
