import React from "react";
import { NavLink } from "react-router-dom";

const BlogItem = ({blogItem}) => {
    return (
        <div className="blog__articles-item articles-item">
            <div className="articles-item__image">
                <img src={blogItem.photo} alt="articles-item__image" />
            </div>
            <div className="articles-item__wrapper">
                <div className="articles-item__time">
                    {blogItem.time}
                </div>
                <div className="articles-item__title">
                    {blogItem.title}
                </div>
                <NavLink className="articles-item__btn" to={`/article/${blogItem._id}`}>read more</NavLink>
            </div>
        </div>
    )
}

export default BlogItem
