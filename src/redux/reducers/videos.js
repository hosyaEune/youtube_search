import { Types } from '../actions/videos'

import produce from 'immer';

const initState = {
  videos: {
    items: [],
    count: 0
  }
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_VIDEOS:
        draft.videos.items = action.payload.items;
        draft.videos.count = action.payload.pageInfo.totalResults;
        break;
      default:
    }
  });
}; 