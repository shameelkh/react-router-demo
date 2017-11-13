import React from 'react'

const Navigation = () => {
    return (
        <div class="navbar">
            <a ui-sref="home" ui-sref-active="active" class="nav-link">Home</a>
            <a ui-sref="profile.main" ui-sref-active="active" class="nav-link">Profile</a>
        </div>
    )
}

export default Navigation