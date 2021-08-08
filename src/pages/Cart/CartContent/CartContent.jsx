import CartItem from 'components/CartItem/CartItem'
import React from 'react'
import Card from '@material-ui/core/Card';


const CartContent = ({cartItems, totalSumm}) => {
    return (
        <div className="cart__content">
        { cartItems.map(item => <CartItem key={item._id} item={item} />) }
        <Card className = "cart__totals">
            <p className="cart__title">Your cart</p>
            <div className="cart__discount discount">
                <input className="discount__field input" type="text" placeholder="Discount promo code" />
                <button className="discount__btn btn">Apply</button>
            </div>
            <button className="btn cart__totals-btn">Buy for $ {totalSumm}</button>
        </Card>
        </div>                   
    )
}

export default CartContent