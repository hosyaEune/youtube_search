// #TODO: а нужен ли этот стейт или сделать через Localstorage. Нужен, если делать через базу данных, но в данном задании не знаю
// #TODO: DRY
import { reactLocalStorage } from 'reactjs-localstorage';
import { filter } from 'lodash'

export const Types = {
    SET_FAVORITE_VIDEOS: 'VIDEOS@FAVORITE_VIDEOS:SET_FAVORITE_VIDEOS',
    ADD_FAVORITE_VIDEOS: 'VIDEOS@FAVORITE_VIDEOS:ADD_FAVORITE_VIDEOS',
    DELETE_FAVORITE_VIDEOS: 'VIDEOS@FAVORITE_VIDEOS:DELETE_FAVORITE_VIDEOS',
    CLEAR_FAVORITE_VIDEOS: 'VIDEOS@FAVORITE_VIDEOS:CLEAR_FAVORITE_VIDEOS',
};

export const fetchFavoriteVideos = () => (dispatch) => {
    const login = reactLocalStorage.get('login')
    let prevObj = reactLocalStorage.getObject(login)
    if (prevObj.favoriteVideos) {
        dispatch(setFavoriteVideos(prevObj.favoriteVideos))
    }
}


export const setFavoriteVideos = (obj) => ({
    type: Types.SET_FAVORITE_VIDEOS,
    payload: obj
})

export const addFavoriteVideos = (obj) => {
    const login = reactLocalStorage.get('login')
    let prevObj = reactLocalStorage.getObject(login)
    if (!prevObj.favoriteVideos) {
        reactLocalStorage.setObject(login, { ...prevObj, favoriteVideos: [] })
        prevObj = reactLocalStorage.getObject(login)
    }
    reactLocalStorage.setObject(login, { ...prevObj, favoriteVideos: [...prevObj.favoriteVideos, obj] })
    return {
        type: Types.ADD_FAVORITE_VIDEOS,
        payload: obj
    }
}

export const deleteFavoriteVideos = (title) => {
    const login = reactLocalStorage.get('login')
    const prevObj = reactLocalStorage.getObject(login)
    reactLocalStorage.setObject(login,
        { ...prevObj, favoriteVideos: filter(prevObj.favoriteVideos, favoriteVideo => favoriteVideo.title !== title) })
    console.log(reactLocalStorage.getObject(login))
    return {
        type: Types.DELETE_FAVORITE_VIDEOS,
        payload: title
    }
}

export const clearFavoriteVideos = () => ({
    type: Types.CLEAR_FAVORITE_VIDEOS
})