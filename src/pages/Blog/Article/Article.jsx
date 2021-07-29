import React from "react";
import { NavLink } from "react-router-dom";

export const Article = ({article}) => {
    const textCrop = (text) => {
        let arr = []
        let crop = text.split(" ")
        for(let i = 0; i < 30; i++){
            arr.push(crop[i])
        }
        let cropText = [...arr, '...']
        return cropText.join(' ')
    }

    return(
           <div className="topic">
            <div className="topic__time-wrapper">
                <span className="topic__time">{article.time}</span>
            </div>
            <div className="topic__content">
                <div className="topic__title">{article.title}</div>
                <div className="topic__article">{textCrop(article.artical)}</div>
                <NavLink className="topic__link" to={`/article/${article._id}`}>More Details</NavLink>
            </div>
            <div className="topic__image">
                <img src={article.photo} alt="article"/>
            </div>
        </div>
    )
}

export default Article