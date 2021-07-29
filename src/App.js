import React from 'react'
import Header from "./components/Header/Header";
import './scss/style.scss'
import {Route} from 'react-router-dom'
import Description from "./pages/Description/Description";
import Cart from "./pages/Cart/Cart";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Contacts from "./pages/Contacts/Contacts";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./redux/store";
import ArticleDatails from 'pages/Blog/ArticleDatails/ArticleDatails';
import Categories from 'pages/Categories/Categories';

const App = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
        <div className="app">
            <Header />
            <Route  path='/categories' render={() => <Categories/>}/>
            <Route path='/description/id=:id' render={() => <Description/>}/>
            <Route path='/cart' render={() => <Cart/>}/>
            <Route exact path='/' render={() => <Main/>}/>
            <Route exact path='/blog' render={() => <Blog/>}/>
            <Route path='/contacts' render={() => <Contacts/>}/>
            <Route  exact path='/article/:id' render={() => <ArticleDatails />}/>
            <Footer />
        </div>
        </Provider>
    </BrowserRouter>
    )
}

export default App