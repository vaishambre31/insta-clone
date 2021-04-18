import { CHANGE_TAB_COLOR } from "../types"

export const ChangeTabColor = (color) => {
    return dispatch => {
        dispatch({
            type: CHANGE_TAB_COLOR,
            payload: color
        })
    }
}