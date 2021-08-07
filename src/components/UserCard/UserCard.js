import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import {getCartItems, getTotalCount} from "../../redux/selectors/items-selectors";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { actions } from 'actions/actions';

const UserCard = () => {
    const dispatch = useDispatch()
    const cartItemsCount = useSelector(getCartItems).length
    const totalCount = useSelector(getTotalCount)
    
    useEffect(() => {
        dispatch(actions.fetchCartItems())
        dispatch(actions.setCartTotal(cartItemsCount))
    }, [cartItemsCount, dispatch])
    
    return (
        <div className="card">
            <div className="card__field">
                <input className="card__field-filed" type="text" placeholder="search"/>
            </div>
            <div className="card__btn">
                <NavLink className="card__btn-btn" to={"/cart"}><ShoppingCartIcon className="icon"/></NavLink>
                <span className="card__btn-count">{totalCount !== 0 ? totalCount : ''}</span>
            </div>
        </div>


    )
}
export default UserCard
