import React from 'react'
import ReactDOM from 'react-dom'
import './app-styles.css'
import Header from './components/Header'
import Navigation from './components/Navigation'

const App = () => {
    return (
        <div>
            {/* (1) Remove Header: add in demo */}
            <Header />
            <div className="container">
                {/* (2) Remove Naviation: Add in demo */}
                <Navigation />
                {/* (3) TODO: Add Routing */}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));