import { SET_USER, CLEAR_USER } from '../../store/types'

export const Set_User = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    })
}

export const Clear_User = () => dispatch => {
    dispatch({
        type: CLEAR_USER,
        payload: null
    })
}