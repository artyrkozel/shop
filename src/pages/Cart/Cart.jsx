import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { fetchCartItems } from "../../redux/reducers/cart-reducer";
import {getCartItems} from "../../selectors/items-selectors";
import CartItem from "../../components/CartItem/CartItem";
import Card from '@material-ui/core/Card';

const Cart = () => {

    const [resultArr, setResultArr] = useState([])
    const dispatch = useDispatch()
    const cartItems = useSelector(getCartItems)
    useEffect(() => {
        dispatch(fetchCartItems())
    },[dispatch])

    useEffect(() => {
        localStorage.setItem('cartCount', JSON.stringify(cartItems.length))
    }, [cartItems])

    useEffect(() => {
        let result = cartItems.reduce((acc, item) => {
            const {price, count} = item
            return acc + price * count
        }, 0)
        setResultArr(result)
    }, [cartItems])
    
    return (
        <div className="cart">
            <div className="container-fluid">
                <div className="cart__inner">
                    <div className="cart__title">Shopping Cart</div>
                    {cartItems.map(item => <CartItem key={item._id} item={item}/>)}
                    <Card className="cart__totals">
                        <p className="cart__title">Your cart</p>
                        <div className="cart__discount discount">
                            <input className="discount__field input" type="text" placeholder="Discount promo code"/>
                            <button className="discount__btn btn">Apply</button>
                        </div>
                        <button className="btn cart__totals-btn">Buy for $ {resultArr}</button>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Cart