import { Types } from '../actions/modal'

import produce from 'immer';

const initState = {
    activeModal: false,
    form: {
      q: '',
      title: '',
      sort: null,
      count: 12
    }
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
        case Types.SET_ACTIVE:
            draft.activeModal = action.payload;
            break;
        default:
    }
  });
}; 