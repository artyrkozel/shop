import React from 'react'
import {NavLink} from "react-router-dom";

const Nav = () => {

    return (
            <nav className="menu">
                <div className="menu__inner">
                        <ul className="menu__list list">
                            <li className="list__item">
                                <NavLink to="/" activeClassName="list__link-active" className="list__link">Home</NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink to="/blog" activeClassName="list__link-active" className="list__link">Blog</NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink to="/categories" activeClassName="list__link-active" className="list__link">Category</NavLink>
                            </li>
                            <li className="list__item">
                                <NavLink to="/contacts" activeClassName="list__link-active" className="list__link">Contacts</NavLink>
                            </li>
                        </ul>
                </div>
            </nav>
    )
}

export default Nav