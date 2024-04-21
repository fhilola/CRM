import { CREATE_USER } from "../actions/index";
const initialState = {
    user: null,
    isloading: false,
    isError: false,
    isCreated: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
                isloading: false,
                isError: false,
                isCreated: true
            }
        default:
            return state
    }
}

export {userReducer}