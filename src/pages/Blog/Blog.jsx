import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../selectors/items-selectors";
import {fetchBlogItems} from "../../redux/reducers/cart-reducer";
import Article from "./Article/Article";
import { useCallback } from "react";


const Blog = () => {
    const dispatch = useDispatch()
    const articles = useSelector(getArticles)
    const onClickGetCartItems = useCallback(() => {
        dispatch(fetchBlogItems())
    }, [dispatch])
    
    useEffect(() => {
        onClickGetCartItems()
    }, [onClickGetCartItems])

    return(
        <div className="news">
            <div className="container">
                <div className="news__inner">
                   <div className="news__topic">
                       {articles.map( article => <Article key={article._id} article={article}/>)}
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Blog