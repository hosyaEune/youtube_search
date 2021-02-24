import React from 'react'

import { Button, Input } from './'

import cn from 'classnames'

import { Link } from "react-router-dom"

const SearchInput = ({ onClick, value, onChange, className, onHeartClick }) => {
    const [activeHeart, setActiveHeart] = React.useState(false)

    const heartClick = () => {
        setActiveHeart(!activeHeart)
        if(onHeartClick){
            onHeartClick()
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onClick()
    }

    return (
        <form className="searchInput" onSubmit={onSubmit}>
            <div className="searchInput__input">
                <Input placeholder='Что хотите посмотреть?' value={value} onChange={onChange}/>
                <span className={cn('heart', className, {'active': activeHeart})} onClick={heartClick}></span>
            </div>
            <div className={cn('searchInput__toolTip', {'active': !activeHeart})}>
                Поиск сохранён в разделе «Избранное»
                <Link to="/favorite" className="toolTip-link">Перейти в избранное</Link>
                
            </div>
            <Button type="sub,it">Найти</Button>
        </form>
    )
}

export default SearchInput