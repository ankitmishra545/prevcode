import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, clear } from '../store/cartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  let totalCartValueRef = useRef(0)

  let cartProducts = useSelector((store) => {
    return store.cart;
  })

const removeProductFromCart = (id) => {
  dispatch(remove(id));
}

const clearCart = () => {
  dispatch(clear());
}
totalCartValueRef.current = 0;
  return (
    <div className='cartWrapper'>
      <div>
        <h3>Your Cart</h3>
        <button onClick={() => {clearCart()}} className='clearButton'>Clear cart</button>
      </div>
      <div>
        {
          cartProducts.map((product,index) => {
            totalCartValueRef.current += product.price;
            return <div className='cartCard' key={index}>
              <img src={product.image}/>
              <h5 style={{width:"200px"}}>{product.title}</h5> 
              <h5 style={{width:"100px"}}>{product.price}$</h5>
              <button onClick={() => {removeProductFromCart(product.id)}}>
                <span className="k-icon k-i-delete" style={{color: "red"}}/> 
              </button>
            </div>
          })
        }
      </div>
      {
        cartProducts.length ? <div>
        <strong>Number of items : </strong>{cartProducts.length}
        <strong>Total Order Value: </strong>{totalCartValueRef.current}$
      </div> : null
      }
    </div>
  )
}

export default Cart