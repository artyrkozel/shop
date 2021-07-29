import {applyMiddleware, combineReducers, createStore} from "redux";
import itemsReducer from "./reducers/items-reducer";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "./sagas/sagas";
import cartReducer from "./reducers/cart-reducer";
import blogReducer from "./reducers/blog-reducer";


const SagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
    blog: blogReducer
})

let store = createStore(rootReducer,applyMiddleware(SagaMiddleware))
SagaMiddleware.run(rootWatcher)

export default store

window.store = store;

