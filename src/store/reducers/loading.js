import { SHOW_LODING, HIDE_LODING } from "../types";

const initialState = {
    loading: false,
    isGlobal: false
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SHOW_LODING:
            return {
                ...state,
                loading: payload.loading,
                isGlobal: payload.isGlobal,
            };
        case HIDE_LODING:
            return {
                ...state,
                loading: payload.loading,
                isGlobal: payload.isGlobal,
            };
        default:
            return state;
    }
}