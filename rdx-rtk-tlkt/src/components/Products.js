import React, { useEffect, useState } from 'react'
import { add, remove } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {

    const dispatch = useDispatch();

    const {data: products, status, cart} = useSelector((store) => {
        return {data: store.product, cart: store.cart};
    })

    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async() => {
        //     const data = await(
        //         await fetch("https://fakestoreapi.com/products")
        //     ).json();
        //     setProducts(data);
        // };
        // fetchProducts();
    },[])

    const addItemToCart = (product) => {
        console.log(cart)
        dispatch(add(product));
    }

    const removeItemFromCart = (id) => {
        console.log(id)
        dispatch(remove(id))
    }

    if(status === STATUSES.LOADING){
        return <h5>Loading...</h5>
    }else if(status === STATUSES.ERROR){
        return <h5>Something went wrong!</h5>
    }

    // console.log("products",products)
    // console.log("cart",cart)

  return (
    <div className='productsWrapper'>
        {
            products.data.map((product) => {
                let numberOfItemsInCart = cart.filter(item => item.id === product.id);
                return <div className='card' key={product.id}>
                    <img src={product.image} alt=''/>
                    <h5>{product.title}</h5>
                    <h6>{product.price}$</h6>
                    {numberOfItemsInCart.length ? <span className='buttonAfterAdded'>
                    <button onClick={() => {removeItemFromCart(product.id)}}>-</button><strong style={{width:"40px", marginLeft: "20%"}}>{numberOfItemsInCart.length}</strong>
                    <button onClick={() => {addItemToCart(product)}}>+</button>
                    </span> : <button onClick={() => {addItemToCart(product)}}>Add to cart</button>}                 
                    
                </div>
            })
        }
    </div>
  )
}

export default Products