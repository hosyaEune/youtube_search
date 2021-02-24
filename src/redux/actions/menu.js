export const Types = {
    SET_ACTIVE: 'MENU@ACTIVE:SET_ACTIVE',
}

export const setMenuActive = (id) => ({
    type: Types.SET_ACTIVE,
    payload: id
})