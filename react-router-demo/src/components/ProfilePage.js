import React from 'react'
import ProfileMain from './ProfileMain'
import ProfileSettings from './ProfileSettings'
import { Route } from 'react-router'
import { Switch, NavLink } from 'react-router-dom'

const ProfilePage = ({ match }) => {
    return (
        <div class="welcome-page">
            <h1>Profile Page</h1>
            <div>
                <NavLink to={'/profile'} exact={true} className="nav-link" activeClassName="active">
                    Main
                </NavLink>
                <NavLink to={'/profile/settings'} exact={true} className="nav-link" activeClassName="active">
                    Settings
                </NavLink>
            </div>

        </div>
    )
}

export default ProfilePage