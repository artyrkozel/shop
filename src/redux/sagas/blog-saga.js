import { actions } from 'actions/actions';
import {put, call, takeEvery} from 'redux-saga/effects'
import {movieApi} from "../../api/api";

function* requestBlogItems(){
    try{
        let res = yield call(() => movieApi.getBlogItems())
        yield put(actions.setArticles(res.data))
    } catch (e) {
        console.log(e)
    }

}

function* requestArticleById(action){
    debugger
    try{
        let res = yield call(() => movieApi.getArticle(action.articleId))
        yield put(actions.setArticles(res.data))
    } catch (e) {
        console.log(e)
    }
}

export function* requestBlogWatcher(){
    yield takeEvery('FETCH_BLOG_ITEMS', requestBlogItems)
    yield takeEvery('FETCH_ARTICLE', requestArticleById)
}