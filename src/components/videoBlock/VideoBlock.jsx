import React from 'react'

const VideoBlock = ({video, rotation}) => {
    return (
        <div className="videoBlock">
            <div className="videoBlock__img">
                <img src={video.snippet.thumbnails.medium.url} alt=""/>
            </div>
            <div>
                <div className="videoBlock__title">
                    {video.snippet.title.length > 60 && rotation === 'grid' ? `${video.snippet.title.slice(0, 57)}...` : video.snippet.title}
                </div>
                <div className="videoBlock__desc">
                    {video.snippet.description.length > 30 && rotation === 'grid' ? `${video.snippet.description.slice(0, 27)}...` : video.snippet.description}
                </div>
            </div>
        </div>
    )
}

export default VideoBlock