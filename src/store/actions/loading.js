import { SHOW_LODING, HIDE_LODING } from "../types"

const ShowLoader = (loading, isGlobal) => {
    return {
        type: SHOW_LODING,
        payload: {
            loading,
            isGlobal
        }
    }
}
const HideLoader = (loading, isGlobal) => {
    return {
        type: HIDE_LODING,
        payload: {
            loading,
            isGlobal
        }
    }
}
export {
    ShowLoader,
    HideLoader
}