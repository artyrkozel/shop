import React, { useEffect, useState } from 'react'
import shoppingCart from '../../common/images/shoping.svg'
import user from '../../common/images/icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {getCartItems, getCartValue} from "../../selectors/items-selectors";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { fetchCartItems } from 'redux/reducers/cart-reducer';

const UserCard = () => {
    const dispatch = useDispatch()
    const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem('cartCount')))
    const cartItems = useSelector(getCartItems)

    useEffect(() => {
        setCartCount(JSON.parse(localStorage.getItem('cartCount')))
    }, [cartItems])
    

    return (
        <div className="card">
            <div className="card__field">
                <input className="card__field-filed" type="text" placeholder="search"/>
            </div>
            <div className="card__btn">
                <NavLink className="card__btn-btn" to={"/cart"}><ShoppingCartIcon className="icon"/></NavLink>
                <span className="card__btn-count">{cartCount !== 0 ? cartCount : ''}</span>
            </div>
        </div>


    )
}
export default UserCard
