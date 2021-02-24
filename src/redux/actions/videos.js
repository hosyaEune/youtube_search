import axios from 'axios'

export const Types = {
    SET_VIDEOS: 'VIDEOS@VIDEOS:SET_VIDEOS',
};

export const fetchVideos = ({ q, sortBy = { value: 'relevance' }, count = 12, }) => (dispatch) => {
    const apiKey = "AIzaSyAbLdeleUKlijMB2UPZPf7HqdrSgirvS-A" // создал новый аккаунт, чтобы не делать venv
    const url = 'https://www.googleapis.com/youtube/v3/search'
    const totalUrl = url + `?part=snippet&type=video&q=${q}&maxResults=${count}&key=${apiKey}&order=${sortBy.value}`
    axios.get(totalUrl).then((data) => dispatch(setVideos(data.data)))
}

export const setVideos = (obj) => ({
    type: Types.SET_VIDEOS,
    payload: obj
})