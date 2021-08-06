import {put, call, takeEvery} from 'redux-saga/effects'
import {movieApi} from "../../api/api";
import { actions } from 'actions/actions';

function* requestItems(){
    try{
        yield put(actions.isFetchingHandler(true))
        let res = yield call(() => movieApi.getItems())
        yield put(actions.isFetchingHandler(false))
        yield put(actions.setAllItems(res.data))
    } catch (e) {
        console.log(e)
    }
}

function* requestCartItems(){
    try{
        let res = yield call(() => movieApi.getCatItem())
        yield put(actions.setToCartList(res.data))
    } catch (e) {
        console.log(e)
    }
}

function* setItemToCart(action){
    try{
        yield call(() => movieApi.setItemToCart(action.item))
        yield put(actions.fetchCartItems())
    } catch (e) {
        console.log(e)
    }
}

function* deleteCartItem(action){
    try{
        yield call(() => movieApi.deleteCartItem(action.id))
        yield put(actions.fetchCartItems())
    } catch (e) {
        console.log(e)
    }
}

function* updateCartItemCount(action){
    try{
        yield call(() => movieApi.updateCartItemCount(action.id, action.count))
        yield put(actions.fetchCartItems())
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