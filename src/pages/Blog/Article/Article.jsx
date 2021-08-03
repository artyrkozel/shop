import React from "react";
import { NavLink } from "react-router-dom";
import { textCrop } from "utils/utils";

export const Article = ({article}) => {

    return(
           <div className="topic">
            <div className="topic__time-wrapper">
                <span className="topic__time">{article.time}</span>
            </div>
            <div className="topic__content">
                <div className="topic__title">{article.title}</div>
                <div className="topic__article">{textCrop(article.artical)}</div>
                <NavLink className="topic__link topic__link-active" to={`/article/${article._id}`}>More Details</NavLink>
            </div>
            <div className="topic__image">
                <img src={article.photo} alt="article"/>
            </div>
        </div>
    )
}

export default Article