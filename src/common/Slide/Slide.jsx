import React from 'react'
import { NavLink } from 'react-router-dom'

const Slide = ({ slide }) => {

    const addToStorage = () => {
        localStorage.setItem('desc', JSON.stringify(slide))
    }
    
    return (
        <div className="main__content">
            <div className="main__info-block info-block">
                <p className="info-block__title">
                    {slide.title}
                </p>
                <p className="info-block__subtitle">
                    {slide.type} type
                </p>
                <div className="main__btn-block">
                    <button className="main__btn-block-item btn">Price  ${slide.price}</button>
                    <NavLink className="main__btn-block-item btn" to={'/description/id=' + slide._id} onClick={addToStorage}>View product</NavLink>
                </div>
            </div>
            <div className="main__info-img">
                <img src={slide.image} alt="main__info-img" />
            </div>
        </div>
    )
}

export default Slide