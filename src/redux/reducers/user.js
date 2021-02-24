import { Types } from '../actions/user'

import produce from 'immer';

const initState = {
    token: null
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
        case Types.SET_TOKEN:
            draft.token = action.payload;
            break;
        default:
    }
  });
}; 