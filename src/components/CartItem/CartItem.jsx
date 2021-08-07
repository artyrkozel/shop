import React, { useCallback, useEffect, useState } from "react";
import Counter from "../../common/features/Counter/Counter";
import { useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import { actions } from "actions/actions";

const CartItem = ({item}) => {

    const [counter, setCounter] = useState(item.count)

    const dispatch = useDispatch()

    const countHandler = () => {
        setCounter(prev => prev + 1)
    }
    const countHandlerMinus = () => {
        setCounter(prev => prev - 1)
    }

    const deleteItemHandler = () => {
        dispatch(actions.deleteCartItem(item._id))
       dispatch(actions.fetchCartItems())
    }

    const updateItemHandler = useCallback(() => dispatch(actions.updateCartItemCount(item._id, counter)), [counter, item._id, dispatch])

    useEffect(() => {
        updateItemHandler()
        dispatch(actions.fetchCartItems())
    }, [item._id, counter, dispatch, updateItemHandler])

    return (
        <Card className="cart__item cart__item-hover">
            <div className="cart__item-info item-info">
                <div className="item-info__image">
                    <img src={item.image} alt="item-info__image"/>
                </div>
                <div className="item-info__text info-text">
                    <p className="info-text__title">{item.title}</p>
                    <span className="info-text__company">Company : {item.company}</span>
                    <div>Selected size : {item.size}</div>
                </div>
            </div>
            <div className="cart__item-settings item-settings">
                <button className="item-settings__delete-btn item-settings__delete-btn-hover" onClick={deleteItemHandler}><DeleteIcon fontSize="small"/></button>
                <div className="item-settings__counter">
                    <Counter countHandler={countHandler} countHandlerMinus={countHandlerMinus} count={item.count}/>
                </div>
                <div className="item-settings__price">
                    <span>$ {counter * item.price}</span>
                </div>
            </div>
        </Card>
    )
}

export default CartItem