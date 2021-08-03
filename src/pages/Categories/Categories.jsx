import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getFilteredArr, getMovieList} from "../../redux/selectors/items-selectors";
import OfferItem from "../../components/Offer/OfferItem";
import RangeSlider from "../../common/Range/Range";
import Accordiont from 'common/Accordeon/Accordion';
import { useCallback } from 'react';
import Preloader from 'common/Preloader/Preloader';
import { actions } from 'actions/actions';


const Categories = () => {
    const dispatch = useDispatch()

    const [price, setPrice] = useState(JSON.parse(localStorage.getItem('price')))
    const [filterActive, setFilterActive] = useState(false)
    const [loading, setLoading] = useState(false)
    const [typeFilter, setTypeFilter] = useState([])
    
    const items = useSelector(getMovieList)
    const filteredArr = useSelector(getFilteredArr)

    let mapArr = filteredArr?.length !== 0 && filteredArr !== undefined && filterActive ? filteredArr : items

    const typeHandler = useCallback((state) => {
        let filters = []
        let filterType = Object.entries(state)
        filterType.forEach(el => {
            let [key, value ] = el
            if(value){
                return filters.push(key)
            }
        })
        setTypeFilter(filters)
    }, [])
    
    const loadingHandler = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const itemsFilterByPrice = useCallback(() => {
        setFilterActive(true)
        const [low, hight] = price;
        const filteredArr = items?.filter(el => el.price >= low && el.price <= hight ? el : '')
        dispatch(actions.setFilteredItems(filteredArr))
    }, [dispatch, items, price])

    const priceHandler = useCallback((value) => {
        setPrice(value)
        itemsFilterByPrice()
    },[itemsFilterByPrice])
    
    useEffect(() => {
        dispatch(actions.requestAllItems())
    }, [dispatch])

    useEffect(() => {
        loadingHandler()
    }, [price, typeFilter])
    
    useEffect(() => {
        itemsFilterByPrice()
    }, [price, items, itemsFilterByPrice])

    const filterByType = useCallback(() => {
        let resultArr = []
        items?.forEach(el => {
            for(let i = 0; i < typeFilter.length; i++){
               if(el.type === typeFilter[i]){
                   resultArr.push(el)
               }
            }
        })
        setFilterActive(true)
        dispatch(actions.setFilteredItems(resultArr))
    }, [typeFilter, dispatch])

    useEffect(() => {
        filterByType()
    }, [typeFilter, dispatch])
    return (
        <div className="categories">
            <div className="container">
                <div className="categories__inner">
                    <div className="categories__wrapper">
                        <div className="categories__filters">
                            <h2 className="categories__title title">Refine by :</h2>
                            <ul className="categories__accardeon">
                                <li className="list__item">
                                    <Accordiont title="Helmet Type" typeHandler={typeHandler}/>
                                </li>
                            </ul>
                        </div>
                        <div className="categories__filters">
                            <ul className="categories__list list">
                                <li className="list__item">
                                    <RangeSlider priceHandler={priceHandler}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="categories__offers offers">
                        <h2 className="offers__title title">{`Motorcycle Helmets (${mapArr?.length})`}</h2>
                        <div className="offers__items">
                        {loading ? <Preloader /> :
                            mapArr?.map(item =>
                            <OfferItem key={item._id}
                                       title={item.title}
                                       image={item.image}
                                       price={item.price}
                                       id={item._id}
                                       company={item.company}
                            />
                        )
                    }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories