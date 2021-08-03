import React, { useEffect, useState } from 'react'
import { useSelector} from "react-redux";
import {getCartItems} from "../../redux/selectors/items-selectors";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const UserCard = () => {

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
