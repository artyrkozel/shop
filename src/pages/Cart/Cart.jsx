import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../redux/selectors/items-selectors";
import { actions } from 'actions/actions';
import Preloader from 'common/Preloader/Preloader';
import EmptyCart from './EmptyCart/EmptyCart';
import CartContent from './CartContent/CartContent';

const Cart = () => {

    const [totalSumm, setTotalSumm] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const cartItems = useSelector(getCartItems)

    useEffect(() => {
        loadingHandler()
        dispatch(actions.fetchCartItems())
    }, [dispatch])

    const loadingHandler = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        let result = cartItems.reduce((acc, item) => {
            const { price, count } = item
            return acc + price * count
        }, 0)
        setTotalSumm(result)
    }, [cartItems])

    return (
        <div className="cart">
            <div className="container-fluid">
                <div className="cart__inner">
                    <div className="cart__title">Shopping Cart</div>
                    {loading ? <Preloader /> :
                        cartItems.length === 0
                            ? <EmptyCart />
                            : <CartContent cartItems={cartItems} totalSumm={totalSumm} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart