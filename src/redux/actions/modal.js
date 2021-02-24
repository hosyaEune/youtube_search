export const Types = {
    SET_ACTIVE: 'MODAL@ACTIVE:SET_ACTIVE',
}

export const setModalActive = (active) => ({
        type: Types.SET_ACTIVE,
        payload: active
})