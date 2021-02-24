import { combineReducers } from 'redux';

import videos from './videos';
import user from './user';
import modal from './modal';
import menu from './menu';
import favoriteVIdeos from './favoriteVideos'

const rootReducer = combineReducers({
    videos,
    user,
    modal,
    menu,
    favoriteVIdeos
});

export default rootReducer;