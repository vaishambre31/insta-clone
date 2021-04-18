import { SET_ALERT, CLEAR_ALERT } from "../types";

const initialState = {
    alert: {
        message: null,
        alertType: null,
        description: null
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    console.log("payload reducer ", state.alert);
    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                alert: {
                    message: payload.message,
                    alertType: payload.alertType,
                    description: payload.description,
                }
            };
        case CLEAR_ALERT:
            return {
                ...state,
                alert: {
                    message: null,
                    alertType: null,
                    description: null,
                }
            };
        default:
            return state;
    }
}