import { CREATE, CREATE_LOADING } from "../actions/index";
const initialState = {
    created: null,
    isloading: false,
    isError: false,
    isCreated: false
}

const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                created: action.payload,
                isloading: false,
                isError: false,
                isCreated: true
            }
        default:
            return state
    }
}

export default createReducer