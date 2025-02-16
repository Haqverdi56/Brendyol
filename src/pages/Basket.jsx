import React, { useState } from 'react'
import './basket.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteById, increaseCount, decreaseCount } from '../redux/store/features/basketSlice'

function Basket() {
  const products = useSelector(state => state.product) 
  const dispatch = useDispatch()
  
  const productDelete = (id) => {
    dispatch(deleteById(id))
  }

  const totalPrice = (product) => {
    return product.reduce((acc, cur) => acc + cur.price * cur.count, 0).toFixed(2);
  }

  const increase = id => {
    dispatch(increaseCount(id))
  }
  const decrease = id => {
    dispatch(decreaseCount(id))
  }

  return (
    <div className='basket-div'>
      {
        products.length > 0 ? 
        <div className='basket-product'>
        {
          products && products.map(product => (
            <div key={product._id} className='basket-card'>
                <div className='basket-card-img'>
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className='basket-card-about'>
                    <p className='basket-card-about-title'>{product.title}</p>  
                    <p className='basket-card-price'>{product.price}$</p>
                </div>
                <div className='basket-card-buttons-div'>
                  <div className='basket-card-buttons'>
                    <button className='buttonMinus' onClick={() => decrease(product._id)}>-</button>
                    <p className='buttonCount'>{product.count}</p>
                    <button className='buttonPlus' onClick={() => increase(product._id)}>+</button>
                  </div>
                  <div className="basket-card-delete">
                    <AiOutlineDelete onClick={() => productDelete(product._id)} />
                  </div>
                </div>
            </div>
          ))
        }
      </div> : <h1>Səbət boşdur!</h1>
      }
      {
        products.length > 0 ?
        <div className='price-evaluation'>
          <div className='price-evaluation-amount'>
            <p>Çatdırılma</p>
            <span>0</span>
          </div>
          <div className='price-evaluation-amount'>
            <p>Promo</p>
            <span>0</span>
          </div>
          <div className='price-evaluation-amount'>
            <p>Məbləğ</p>
            <span>{totalPrice(products)}</span>
          </div>
        </div> : null
      }
    </div>
  )
}

export default Basket