// @ts-nocheck
import React from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticles } from "../../../redux/selectors/items-selectors";
import { NavLink } from "react-router-dom";

const ArticleDatails = () => {

    const { id } = useParams();
    const article = useSelector(getArticles).filter(el => el._id === id)

    return <div className="details">
        <div className="container-fluid">
            <NavLink to="/blog" className="details__back-btn">Back to blog</NavLink>
            <div className="details__inner">
                {article.map(el => {
                    return (
                        <div className="details__item">
                            <h1 className="details__title">{el.title}</h1>
                            <div className="details__time">{el.time}</div>
                            <div className="details__photo">
                                <img src={el.photo} alt="details__photo" />
                            </div>
                            <p className="details__article">{el.artical}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
}

export default ArticleDatails