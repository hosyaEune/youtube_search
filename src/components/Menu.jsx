import React from 'react'

import { logout } from '../redux/actions/user'
import { setMenuActive } from '../redux/actions/menu'
import { clearFavoriteVideos } from '../redux/actions/favoriteVIdeos'

import cn from 'classnames'

import logo from '../static/imgs/sibdev-logo.png';

import { Link } from "react-router-dom"
import { map } from 'lodash'



const Menu = ({dispatch, useSelector}) => {
    const [menuItems, activeMenuId] = useSelector(({menu}) => [menu.menuItems, menu.activeMenuId])
    // console.log(activeMenuId)
    const selectedActiveMenu = (id) => {
        dispatch(setMenuActive(id))
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
        dispatch(setMenuActive(1))
        dispatch(clearFavoriteVideos())
    }
    return (
        <section className="menuBlock">
            <div className="wrapper">
                {/* <img src={logo} alt=""/> */}
                <nav>
                    <ul className="menu">

                        {map(menuItems, menuItem => (
                            <li
                                className={cn('menu__item', {'active': activeMenuId === menuItem.id})}
                                key={menuItem.id}
                            >
                                <Link className='SectionNavigation-Item Section'
                                    to={menuItem.link}
                                    onClick={() => selectedActiveMenu(menuItem.id)}
                                >
                                    {menuItem.value}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
                <a href="#" onClick={handleLogout}>
                    Выйти
                </a>
            </div>
        </section>
    )
}

export default Menu
