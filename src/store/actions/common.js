import { ShowAlert, ClearAlert } from "../actions/alert";
import { isValid } from "../../utils/validation";

export const Set_Alert = (message, alertType, description) => dispatch => {
    dispatch(ShowAlert(message, alertType, description))
    setTimeout(() => dispatch(ClearAlert()), 2000);
}

export const handleCatch = (error, dispatch) => {

    if (isValid(error.response) && isValid(error.response.data)) {
        Set_Alert(error.response.data.message, 'danger', dispatch)
    } else if (isValid(error.message)) {
        Set_Alert(error.message, 'danger', dispatch)
    } else {
        Set_Alert("Something went wrong", 'danger', dispatch)
    }

}