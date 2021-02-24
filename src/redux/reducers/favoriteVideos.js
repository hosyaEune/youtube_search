import { Types } from '../actions/favoriteVIdeos'

import produce from 'immer';

import { filter } from 'lodash'

const search = [
  {
    count: "20",
    q: "масленников",
    title: "масленников",
    sortBy: {
      text: "Дате",
      value: "date"
    }
  }, {
    count: "9",
    q: "дудь",
    title: "дудь",
    sortBy: {
      value: 'viewCount',
      text: 'Количеству просмотров'
    }
  }
]

const initState = {
  favorite_videos: []
  // favorite_videos: search
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_FAVORITE_VIDEOS:
        draft.favorite_videos = action.payload;
        break;
      case Types.ADD_FAVORITE_VIDEOS:
        draft.favorite_videos = [action.payload, ...state.favorite_videos];
        break;
      case Types.DELETE_FAVORITE_VIDEOS:
        // может добавлять id пока самому и фильтровать по нему. Могут ли быть одинаковые названия?
        console.log(action.payload)
        draft.favorite_videos = filter(state.favorite_videos, favorite_video => favorite_video.title !== action.payload);
        break;
      case Types.CLEAR_FAVORITE_VIDEOS:
        draft.favorite_videos = [];
        break;
      default:
    }
  });
}; 