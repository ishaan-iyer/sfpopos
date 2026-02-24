import { NavLink } from 'react-router-dom'

import './Title.css';


function Title() {
    return (
        <div className="Title">
            <h1>SFPOPOS</h1>
            <div className="Title-Subtitle">San Franciscos Privately Owned Public Open Spaces</div>

            <div>
                <NavLink
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">List</NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about">About</NavLink>
            </div>

            
        </div>
    )
}


export default Title