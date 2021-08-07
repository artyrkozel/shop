import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFilteredArr, getMovieList } from "../../redux/selectors/items-selectors";
import OfferItem from "../../components/Offer/OfferItem";
import RangeSlider from "../../common/Range/Range";
import Accordiont from 'common/Accordeon/Accordion';
import { useCallback } from 'react';
import Preloader from 'common/Preloader/Preloader';
import { actions } from 'actions/actions';


const Categories = () => {
    const dispatch = useDispatch()
    const [price, setPrice] = useState(JSON.parse(localStorage.getItem('price')) || [100, 450])
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
            let [key, value] = el
            if (value) {
                return filters.push(key)
            }
        })
        setTypeFilter(filters)
    }, [])

    const fff = (filteredArr, typeFilter) => {
        if (typeFilter.length > 0 && filteredArr) {
            let resultArr = []
            typeFilter.forEach(element => {
                switch (element) {
                    case "Modular": return filteredArr.filter(el => el.type === "Modular" ? resultArr.push(el) : '')
                    case "HalfFace": return filteredArr.filter(el => el.type === "HalfFace" ? resultArr.push(el) : '')
                    case "FullFace": return filteredArr.filter(el => el.type === "FullFace" ? resultArr.push(el) : '')
                    case "Dirt": return filteredArr.filter(el => el.type === "Dirt" ? resultArr.push(el) : '')
                    default: return
                }
            });
            const [low, hight] = price;
            const finish = resultArr.filter(el => el.price >= low && el.price <= hight ? el : '')
            dispatch(actions.setFilteredItems(finish))
        } else {
            const [low, hight] = price;
            const finish = items?.filter(el => el.price >= low && el.price <= hight ? el : '')
            dispatch(actions.setFilteredItems(finish))
        }
    }
    const loadingHandler = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    const priceHandler = useCallback((value) => {
        setPrice(value)
        setFilterActive(true)
        fff(items, typeFilter)
    }, [price, dispatch, items, typeFilter])

    useEffect(() => {
        dispatch(actions.requestAllItems())
    }, [dispatch])

    useEffect(() => {
        loadingHandler()
    }, [price, typeFilter])

    
    // useEffect(() => {
    //     fff(items, typeFilter)
    // }, [typeFilter])

    return (
        <div className="categories">
            <div className="container">
                <div className="categories__inner">
                    <div className="categories__wrapper">
                        <div className="categories__filters">
                            <h2 className="categories__title title">Refine by :</h2>
                            <ul className="categories__accardeon">
                                <li className="list__item">
                                    <Accordiont title="Helmet Type" typeHandler={typeHandler} />
                                </li>
                            </ul>
                        </div>
                        <div className="categories__filters">
                            <ul className="categories__list list">
                                <li className="list__item">
                                    <RangeSlider priceHandler={priceHandler} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="categories__offers offers">
                        {loading
                            ? <Preloader />
                            : <>
                                <h2 className="offers__title title">{`Motorcycle Helmets (${mapArr?.length})`}</h2>
                                <div className="offers__items">
                                    {
                                        mapArr?.map(item =>
                                            <OfferItem key={item._id}
                                                item={item}
                                            />
                                        )
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories