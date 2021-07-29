import {put, call, takeEvery} from 'redux-saga/effects'
import {movieApi} from "../../api/api";
import {isFetchingHandler, setAllItems} from "../reducers/items-reducer";
import {setToCartList} from "../reducers/cart-reducer";

function* requestItems(){
    try{
        yield put(isFetchingHandler(true))
        let res = yield call(() => movieApi.getItems())
        yield put(isFetchingHandler(false))
        yield put(setAllItems(res.data))
    } catch (e) {
        console.log(e)
    }
}

function* requestCartItems(){
    try{
        let res = yield call(() => movieApi.getCatItem())
        yield put(setToCartList(res.data))
    } catch (e) {
        console.log(e)
    }
}

function* setItemToCart(action){
    try{
        yield call(() => movieApi.setItemToCart(action.item))
    } catch (e) {
        console.log(e)
    }
}

function* deleteCartItem(action){
    try{
        yield call(() => movieApi.deleteCartItem(action.id))
    } catch (e) {
        console.log(e)
    }
}

function* updateCartItemCount(action){
    try{
        yield call(() => movieApi.updateCartItemCount(action.id, action.count))
    } catch (e) {
        console.log(e)
    }
}

export function* requestItemsWatcher(){
    yield takeEvery('FETCH_ITEMS', requestItems)
    yield takeEvery('FETCH_CART_ITEMS', requestCartItems)
    yield takeEvery('SET_NEW_ITEM_TO_CART', setItemToCart)
    yield takeEvery('DELETE_CART_ITEM', deleteCartItem)
    yield takeEvery('UPDATE_CART_ITEM', updateCartItemCount)
}