import {all} from 'redux-saga/effects'
import {requestItemsWatcher} from "./items-saga";
import {requestBlogWatcher} from "./blog-saga";

export function* rootWatcher (){
    yield all([requestItemsWatcher(), requestBlogWatcher()])
}