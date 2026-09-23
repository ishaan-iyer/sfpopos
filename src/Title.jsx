import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'

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
        <header ref={headerRef} className="flex w-full flex-col gap-3 bg-[#4DC9FF] p-4 text-[#262626] md:flex-row md:flex-wrap md:items-center md:justify-between">
            <h1 className="m-0 text-4xl font-bold leading-tight text-red-500">SFPOPOS</h1>
            <div className="text-base">San Franciscos Privately Owned Public Open Spaces</div>

            <button
                type="button"
                className="min-h-11 min-w-11 rounded border border-[#262626] bg-[#262626] px-4 py-2 text-white md:hidden"
                aria-label="Menu"
                aria-expanded={isNavOpen}
                aria-controls="site-navigation"
                onClick={() => setIsNavOpen((open) => !open)}
            >
                Menu
            </button>

            <nav
                id="site-navigation"
                aria-hidden={!isNavOpen}
                className={isNavOpen ? 'flex flex-wrap gap-2 md:flex' : 'hidden md:flex'}
            >
                <NavLink
                    className={({ isActive }) => `rounded px-3 py-2 text-[#262626] underline-offset-4 hover:underline ${isActive ? 'font-bold underline' : 'font-normal'}`}
                    to="/"
                    onClick={() => setIsNavOpen(false)}>List</NavLink>
                <NavLink
                    className={({ isActive }) => `rounded px-3 py-2 text-[#262626] underline-offset-4 hover:underline ${isActive ? 'font-bold underline' : 'font-normal'}`}
                    to="/about"
                    onClick={() => setIsNavOpen(false)}>About</NavLink>
            </nav>

        </header>
    )
}


export default Title