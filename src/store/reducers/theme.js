import { CHANGE_TAB_COLOR } from "../types";
import { colorPrimary } from "../../styles/colors";

const initialState = {
    tabBgColor: colorPrimary,
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_TAB_COLOR:
            return {
                ...state,
                tabBgColor: payload,
            };
        default:
            return state;
    }
}