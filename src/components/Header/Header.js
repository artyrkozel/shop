import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from "../Nav/Nav";
import UserCard from "../UserCard/UserCard";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" ><span className="logo">EVNX.</span></NavLink>
                    <Nav />
                    <UserCard />
                </div>
            </div>
        </div>
    )
}

export default Header