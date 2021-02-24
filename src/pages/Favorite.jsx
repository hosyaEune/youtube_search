import React from 'react'
import { useHistory } from "react-router-dom"

import { map } from 'lodash'

import { setMenuActive } from '../redux/actions/menu'
import { deleteFavoriteVideos, fetchFavoriteVideos } from '../redux/actions/favoriteVIdeos'
import { fetchVideos } from '../redux/actions/videos'

const Favorite = ({ dispatch, useSelector }) => {
    const favoriteVIdeos = useSelector(({ favoriteVIdeos }) => favoriteVIdeos.favorite_videos)
    const history = useHistory();

    const handleTitleClick = (favoriteVIdeo) => {
        dispatch(fetchVideos(favoriteVIdeo))
        dispatch(setMenuActive(1))
        history.push('/')
    }

    React.useState(() => {
        dispatch(setMenuActive(2))
        dispatch(fetchFavoriteVideos())
    }, [dispatch])
    return (
        <div className="container">
            {favoriteVIdeos.length
                ? <div className="body">
                    <h1>Избранное</h1>
                    {map(favoriteVIdeos, favoriteVIdeo =>
                        <div className="favorite_block">
                            <div className="favorite_block__title" onClick={() => handleTitleClick(favoriteVIdeo)}>
                                {favoriteVIdeo.title}
                            </div>
                            <div className="favorite_block__btns">
                                <button type="button" className="favorite_block__btn blue">Изменить</button>
                                <button type="button" className="favorite_block__btn red" onClick={() => dispatch(deleteFavoriteVideos(favoriteVIdeo.title))}>Удалить</button>
                            </div>
                        </div>
                    )
                    }
                </div>
                : <div>У вас еще нет избранных видео!</div>}
        </div>
    )
}

export default Favorite
