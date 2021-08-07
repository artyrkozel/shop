import Nav from 'components/Nav/Nav';
import React from 'react'
import { NavLink } from 'react-router-dom';
import UserCard from "../UserCard/UserCard";

const Header = () => {
    
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/main" ><span className="logo">EVNX.</span></NavLink>
                    <Nav />
                    <UserCard />
                </div>
            </div>
        </div>
    )
}

export default Header