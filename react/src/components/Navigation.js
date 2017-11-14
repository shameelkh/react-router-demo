import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div class="navbar">
            <NavLink to={'/'} exact={true} className="nav-link" activeClassName="active">
                Home
            </NavLink>
            <NavLink to={'/profile'} className="nav-link" activeClassName="active">
                Profile
            </NavLink>
        </div>
    )
}

export default Navigation