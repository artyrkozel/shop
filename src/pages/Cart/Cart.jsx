import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCartItems} from "../../redux/selectors/items-selectors";
import Card from '@material-ui/core/Card';
import { actions } from 'actions/actions';
import Preloader from 'common/Preloader/Preloader';
import CartItem from 'components/CartItem/CartItem';

const Cart = () => {

    const [resultArr, setResultArr] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const cartItems = useSelector(getCartItems)

    useEffect(() => {
        loadingHandler()
        dispatch(actions.fetchCartItems())
    },[dispatch])

    const loadingHandler = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

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
                    {loading 
                    ? <Preloader /> 
                    : cartItems.map(item => <CartItem key={item._id} item={item}/>)}
                    {loading 
                    ? <Preloader /> 
                    : <Card className="cart__totals">
                        <p className="cart__title">Your cart</p>
                        <div className="cart__discount discount">
                            <input className="discount__field input" type="text" placeholder="Discount promo code"/>
                            <button className="discount__btn btn">Apply</button>
                        </div>
                        <button className="btn cart__totals-btn">Buy for $ {resultArr}</button>
                    </Card>}
                </div>
            </div>
        </div>
    )
}

export default Cart