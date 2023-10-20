import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { keywordText, menuText } from '../../data/header'

const Menu = () => {
    const loaction = useLocation();
    console.log(loaction.pathname);

    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {menuText.map((menu, key) => (
                    <li key={key} className={loaction.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon} {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                <ul>
                {keywordText.map((keyword, key) => (
                    <li key={key} className={loaction.pathname === keyword.src ? 'active' : ''}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
                </ul>
            </ul>
        </nav>
    )
}

export default Menu