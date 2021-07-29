import {put, call, takeEvery} from 'redux-saga/effects'
import {movieApi} from "../../api/api";
import {setArticles} from "../reducers/blog-reducer";

function* requestBlogItems(){
    try{
        let res = yield call(() => movieApi.getBlogItems())
        yield put(setArticles(res.data))
    } catch (e) {
        console.log(e)
    }

}

function* requestArticleById(action){
    debugger
    try{
        let res = yield call(() => movieApi.getArticle(action.articleId))
        yield put(setArticles(res.data))
    } catch (e) {
        console.log(e)
    }
}

export function* requestBlogWatcher(){
    yield takeEvery('FETCH_BLOG_ITEMS', requestBlogItems)
    yield takeEvery('FETCH_ARTICLE', requestArticleById)
}