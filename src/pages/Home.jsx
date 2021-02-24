import React from 'react'

import { map } from 'lodash'
import cn from 'classnames'

import { fetchVideos } from '../redux/actions/videos'
import { setModalActive } from '../redux/actions/modal'

import { SearchInput, Button, VideoBlock } from '../components'

const filterRotationValues = [
    {
        id: 1,
        value: 'grid',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5H5V10H10V5Z" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M19 5H14V10H19V5Z" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M19 14H14V19H19V14Z" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M10 14H5V19H10V14Z" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
        </svg>
    },
    {
        id: 2,
        value: 'list',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6H21" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M8 12H21" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M8 18H21" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M3 6H3.01" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M3 12H3.01" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
            <path d="M3 18H3.01" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
        </svg>
    }
]

const Home = ({ dispatch, useSelector }) => {
    const [countVideos, videos] = useSelector(({ videos }) => [videos.videos.count, videos.videos.items]);
    
    const [inputValue, setInputValue] = React.useState('')

    const inputValueChange = (e) => {
        setInputValue(e.target.value)
    }

    const test = () => {
        dispatch(fetchVideos(inputValue))
    }

    const onHeartClick = () => {
        dispatch(setModalActive(true))
    }

    const [filterRotation, setFilterRotation] = React.useState('grid')

    return (
        <section className={cn("container", {"vc": !countVideos})}>
            <div className="body">
                <div>
                    <h1 className={cn({"title_page": !countVideos})}>Поиск видео</h1>
                    <SearchInput
                        dispatch={dispatch}
                        useSelector={useSelector}
                        onClick={test}
                        onChange={inputValueChange}
                        value={inputValue}
                        className={cn({"hidden_heart": !countVideos})}
                        onHeartClick={onHeartClick}
                    />
                </div>
                {!!videos.length &&
                    <div className="videosBlock">
                        <div className="videosBlock__filter_panel">
                            <div>
                                Видео по запросу «{inputValue}» <span>{countVideos}</span>
                            </div>
                            <div className="videosBlock__view_switcher">

                                {map(filterRotationValues, filterRotationValue => (
                                    <span
                                        key={filterRotationValue.id}
                                        className={cn({ "active": filterRotationValue.value === filterRotation })}
                                        onClick={() => setFilterRotation(filterRotationValue.value)}
                                    >
                                        {filterRotationValue.icon}
                                    </span>
                                ))}

                            </div>
                        </div>
                        <div className={cn("items", {"grid": filterRotation === "grid", "list": filterRotation === "list"})}>
                            {map(videos, (video, index) => <VideoBlock key={index} video={video} rotation={filterRotation} />)}
                        </div>
                    </div>}
            </div>
        </section>
    )
}

export default Home
// https://www.googleapis.com/youtube/v3/search?part=snippet&q=swimming&type=video&key=API_KEY