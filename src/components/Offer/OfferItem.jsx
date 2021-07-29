import React from 'react'
import { NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';

const OfferItem = ({ title, image, price, id, company }) => {
    const addToStorage = () => {
        let obj = {title, image, price, id, company}
        localStorage.setItem('desc', JSON.stringify(obj))
    }
    return (
        <NavLink className="item-offer__btn" to={'/description/id=' + id} onClick={addToStorage}>
        <Card className="offers__item item-offer">
                <div className="item-offer__image">
                    <img className="" src={image} alt="item-offer__image" />
                </div>
                <div className="item-offer__info">
                        <span className="item-offer__title">{title}</span>
                        <span className="item-offer__price">{`$ ${price}`}</span>
                   
                </div>
        </Card>
</NavLink>
    )
}

export default OfferItem