import { SET_ALERT, CLEAR_ALERT } from "../types"

const ShowAlert = (message, alertType, description) => dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: { message, alertType, description }
    })
}
const ClearAlert = () => dispatch => {
    dispatch({
        type: CLEAR_ALERT,
        payload: null
    })
}
export {
    ShowAlert,
    ClearAlert
}