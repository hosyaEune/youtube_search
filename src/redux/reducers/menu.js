import { Types } from '../actions/menu'

import produce from 'immer';

const menuItems = [
    {
        id: 1,
        value: 'Поиск',
        link: '/'
    },
    {
        id: 2,
        value: 'Избранное',
        link: 'favorite'
    }
]

const initState = {
    menuItems,
    activeMenuId: 1
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
        case Types.SET_ACTIVE:
            draft.activeMenuId = action.payload;
            break;
        default:
    }
  });
}; 