// @ts-nocheck
import React from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticles } from "../../../selectors/items-selectors";

const ArticleDatails = () => {

    const { id } = useParams();
    const article = useSelector(getArticles).filter(el => el._id === id)

    return <div className="details">
        <div className="container-fluid">
            <div className="details__inner">
                {article.map(el => {
                    return (
                        <div>
                            <h1 className="details__title">{el.title}</h1>
                            <div className="details__time">{el.time}</div>
                            <div className="details__photo">
                                <img src={el.photo} alt="photo" />
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