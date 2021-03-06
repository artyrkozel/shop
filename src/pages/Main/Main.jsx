import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import brand1 from '../../common/images/brand1.png'
import brand2 from '../../common/images/brand2.png'
import brand3 from '../../common/images/brand3.png'
import brand4 from '../../common/images/brand4.png'
import brand5 from '../../common/images/brand5.png'
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, getItemsList } from '../../redux/selectors/items-selectors';
import Slide from 'common/Slide/Slide';
import BlogItem from 'common/BlogItem/BlogItem';
import { NavLink } from 'react-router-dom';
import { actions } from 'actions/actions';

const Main = () => {
    const items = useSelector(getItemsList)
    const articles = useSelector(getArticles)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(actions.requestAllItems())
        dispatch(actions.fetchBlogItems())
    }, [dispatch])

    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="main__inner">
                        <Carousel showArrows={true} showIndicators={false} dynamicHeight={false} emulateTouch={true} showStatus={false} showThumbs={false}>
                            {items?.map(slide => <Slide key={slide._id} slide={slide}/>)}
                        </Carousel>
                        
                    </div>
                </div>
            </div>
            <section className="blog">
                <div className="container-fluid">
                    <div className="blog__inner">
                        <div className="blog__wrapper">
                            <div className="blog__title-wrapper">
                                <p className="blog__title">Blog x Events</p>
                                <NavLink className="articles-item__btn" to={`/blog`}>see all</NavLink>
                            </div>
                            <div className="blog__articles">
                                {articles?.map(blogItem => <BlogItem  blogItem={blogItem} key={blogItem._id}/>)}
                           </div>
                        </div>
                        <div className="blog__banner">
                            <p className="blog__banner-title">AGV<br />Best Sellers</p>
                            <div className="blog__banner-divider"> </div>
                            <p className="blog__banner-subtitle">See our most popular products</p>
                            <button className="btn">Shop now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-box">
                <div className="container-fluid">
                    <div className="news-box__inner">
                        <div className="new-box__input-container input-container">
                            <label className="input-container__label" htmlFor="news-box">Sign up to our newsletter:</label>
                            <input type="text" id="news-box" className="input-container__field input" placeholder="Enter your email address..." />
                        </div>
                        <button className="btn news-box__btn">Sign up</button>
                    </div>
                    <div className="news-box__brands">
                        <img className="news-box__brands-item" src={brand1} alt="news-box" />
                        <img className="news-box__brands-item" src={brand2} alt="news-box" />
                        <img className="news-box__brands-item" src={brand3} alt="news-box" />
                        <img className="news-box__brands-item" src={brand4} alt="news-box" />
                        <img className="news-box__brands-item" src={brand5} alt="news-box" />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Main