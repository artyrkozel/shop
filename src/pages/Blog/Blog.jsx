import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../redux/selectors/items-selectors";
import Article from "./Article/Article";
import { useCallback } from "react";
import { actions } from "actions/actions";


const Blog = () => {
    const dispatch = useDispatch()
    const articles = useSelector(getArticles)
    const onClickGetCartItems = useCallback(() => {
        dispatch(actions.fetchBlogItems())
    }, [dispatch])
    
    useEffect(() => {
        onClickGetCartItems()
    }, [onClickGetCartItems])

    return(
        <div className="news">
            <div className="container">
                <div className="news__inner">
                    <p className="news__title">Blog</p>
                   <div className="news__topic">
                       {articles.map( article => <Article key={article._id} article={article}/>)}
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Blog