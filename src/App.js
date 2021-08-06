import React from 'react'
import './scss/style.scss'
import { Route, Switch } from 'react-router-dom'
import Description from "./pages/Description/Description";
import Cart from "./pages/Cart/Cart";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Contacts from "./pages/Contacts/Contacts";
import ArticleDatails from 'pages/Blog/ArticleDatails/ArticleDatails';
import Categories from 'pages/Categories/Categories';
import Header from 'components/Header/Header';

const App = () => {

    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path='/categories' render={() => <Categories />} />
                <Route path='/description/id=:id' render={() => <Description />} />
                <Route path='/cart' render={() => <Cart />} />
                <Route exact path='/main' render={() => <Main />} />
                <Route path='/blog' render={() => <Blog />} />
                <Route path='/contacts' render={() => <Contacts />} />
                <Route exact path='/article/:id' render={() => <ArticleDatails />} />
            </Switch>
            <Footer />
        </div >



    )
}

export default App