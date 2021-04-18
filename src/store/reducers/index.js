import { combineReducers } from "redux";
import alert from "./alert";
import loading from "./loading";
import auth from "./auth";
import theme from "./theme";

const rootReducer = combineReducers({
    alert,
    loading,
    auth,
    theme
});

export default rootReducer;