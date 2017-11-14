import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import './app-styles.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'


const App = () => {
    return (
        <div>
            {/* (1) Remove Header: add in demo */}
            <Header />
            <div className="container">
                {/* (2) Remove Naviation: Add in demo */}
                <Navigation />

                {/* (3) TODO: Add Routing for HomePage and ProfilePage*/}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/profile' component={ProfilePage} />
                </Switch>

            </div>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));