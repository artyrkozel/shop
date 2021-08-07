import React from 'react'
import { NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { useDispatch } from 'react-redux';
import { actions } from 'actions/actions';

const OfferItem = ({ item }) => {
    const dispatch = useDispatch()
    const setDiscr = () => {
        dispatch(actions.setDecriptionItem(item))
    }

    return (
        <NavLink className="item-offer__btn" to={'/description/id=' + item._id} onClick={setDiscr}>
            <span className="item-offer__type">{item.type}</span>
        <Card className="offers__item item-offer">
                <div className="item-offer__image">
                    <img className="" src={item.image} alt="item-offer__image" />
                </div>
                <div className="item-offer__info">
                        <span className="item-offer__title">{item.title}</span>
                        <span className="item-offer__price">{`$ ${item.price}`}</span>
                </div>
        </Card>
</NavLink>
    )
}

export default OfferItem