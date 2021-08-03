import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, getItem } from "../../redux/selectors/items-selectors";
import { NavLink } from "react-router-dom";
import arrowIcon from '../../common/images/arrow.png'
import Counter from "../../common/features/Counter/Counter";
import Loader from 'common/Loader/Loader';
import { actions } from 'actions/actions';

const Description = () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [size, setSize] = useState('S')
    const [contain, setContain] = useState(false)

    const countHandler = () => { setCount(prev => prev + 1) }
    const countHandlerMinus = () => { setCount(prev => prev - 1) }

    const item = (useSelector(getItem))
    const cartItems = useSelector(getCartItems)

    const onClickSetToCart = () => {
        let cartCount = JSON.parse(localStorage.getItem('cartCount')) + 1 
        let cartItem = {
            ...item,
            size: size,
            count: count
        }
        dispatch(actions.setNewItemToCart(cartItem))
        localStorage.setItem('cartCount', JSON.stringify(cartCount))        
    }

    useEffect(() => {
        let item = JSON.parse(localStorage.getItem('desc'))
        dispatch(actions.setDecriptionItem(item))
        dispatch(actions.fetchCartItems())
        let uniqArr = cartItems.filter(el => el.title === item.title)
        if (uniqArr.length === 0) {
            setContain(false)
        } else {
            setContain(true)
        }
    }, [dispatch, cartItems])

    if (item === undefined || item === null) return <Loader />
    return (
        <div className="description">
            <div className="container">
                <div className="description__inner">
                    <div className="description__settings settings">
                        <div className="settings__back-btn">
                            <img className="settings__back-btn-image" src={arrowIcon} alt="arrowIcon" />
                            <NavLink to="/categories" className="settings__back-btn-btn">Back to categories</NavLink>
                        </div>
                        <div className="settings__title">{item.title}</div>
                        <div className="settings__price">$ {item.price}</div>
                        <div className="settings__size">
                            <div className="settings__size-title">{`Selected size ${size}`}</div>
                            <ul className="settings__size-list size-list">
                                <li className="size-list__item">
                                    <input className="list-item__field" type="text" defaultValue="S" id="S" onClick={event => setSize(event.currentTarget.value)} />
                                    <label className="list-item__label" htmlFor="S">S</label>
                                </li>
                                <li className="size-list__item">
                                    <input className="list-item__field" type="text" defaultValue="M" id="M" onClick={event => setSize(event.currentTarget.defaultValue)} />
                                    <label className="list-item__label" htmlFor="M">M</label>
                                </li>
                                <li className="size-list__item">
                                    <input className="list-item__field" type="text" defaultValue="X" id="X" onClick={event => setSize(event.currentTarget.defaultValue)} />
                                    <label className="list-item__label" htmlFor="X">X</label>
                                </li>
                                <li className="size-list__item">
                                    <input className="list-item__field" type="text" defaultValue="XL" id="XL" onClick={event => setSize(event.currentTarget.defaultValue)} />
                                    <label className="list-item__label" htmlFor="XL">XL</label>
                                </li>
                            </ul>
                            <div>
                            </div>
                        </div>
                        <div className="settings__counter">
                            <Counter countHandler={countHandler} countHandlerMinus={countHandlerMinus} count={count} />
                        </div>
                        {contain
                            ? <button className="settings__btn btn" disabled={contain}>Already Added</button>
                            : <button className="settings__btn btn" onClick={onClickSetToCart}>Add to Cart</button>
                        }
                    </div>
                    <div className="description__photo-container">
                        <div className="photo-container__title">
                            <div className="company-name">{item.company}</div>
                        </div>
                        <div className="photo-container__photo">
                            <img src={item.image} alt="description" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description