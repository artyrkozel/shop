import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../selectors/items-selectors";
import {fetchBlogItems} from "../../redux/reducers/cart-reducer";
import Article from "./Article/Article";


const Blog = () => {
    const dispatch = useDispatch()
    const articles = useSelector(getArticles)
    const onClickGetCartItems = async () => {
        // try{
        //     await axios.get('/api/article/all', {headers: {'Content-Type' : 'application/json'}})
        //         .then((res) => dispatch(setArticles(res.data)))
        // } catch (e) {
        //     console.log(e)
        // }
        dispatch(fetchBlogItems())
    }
    
    useEffect(() => {
        onClickGetCartItems()
    }, [])

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