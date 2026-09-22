import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'

import './Title.css';


function Title() {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const headerRef = useRef(null);

    useEffect(() => {
        const closeOnOutsideClick = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener('mousedown', closeOnOutsideClick);
        return () => document.removeEventListener('mousedown', closeOnOutsideClick);
    }, []);

    return (
        <header ref={headerRef} className="Title">
            <h1>SFPOPOS</h1>
            <div className="Title-Subtitle">San Franciscos Privately Owned Public Open Spaces</div>

            <button
                type="button"
                className="nav-toggle"
                aria-label="Menu"
                aria-expanded={isNavOpen}
                aria-controls="site-navigation"
                onClick={() => setIsNavOpen((open) => !open)}
            >
                Menu
            </button>

            <nav id="site-navigation" aria-hidden={!isNavOpen} hidden={!isNavOpen}>
                <NavLink
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/"
                    onClick={() => setIsNavOpen(false)}>List</NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about"
                    onClick={() => setIsNavOpen(false)}>About</NavLink>
            </nav>

        </header>
    )
}


export default Title