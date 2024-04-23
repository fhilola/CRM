import { GET_GROUP, GET_ROOM, GET_SUBJECT, GET_USER } from "../actions/index"

const initialState = {
    output: [],
    isloading: false,
    isError: false,
    isGet: false
}

const groupInfo = {
    groups: [],
    isloading: false,
    isError: false,
    isGet: false
}
const subjectInfo = {
    subjects: [],
    isloading: false,
    isError: false,
    isGet: false
}
const roomInfo = {
    rooms: [],
    isloading: false,
    isError: false,
    isGet: false
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER:
            return {
                output: payload,
                isloading: false,
                isError: false,
                isGet: true
            }
        default:
            return state
    }
}
const groupReducer = (state = groupInfo, { type, payload }) => {
    switch (type) {
        case GET_GROUP:
            return {
                groups: payload,
                isloading: false,
                isError: false,
                isGet: true
            }
        default:
            return state
    }
}
const subjectReducer = (state = subjectInfo, { type, payload }) => {
    switch (type) {
        case GET_SUBJECT:
            return {
                subjects: payload,
                isloading: false,
                isError: false,
                isGet: true
            }
        default:
            return state
    }
}
const roomReducer = (state = roomInfo, { type, payload }) => {
    switch (type) {
        case GET_ROOM:
            return {
                rooms: payload,
                isloading: false,
                isError: false,
                isGet: true
            }
        default:
            return state
    }
}

export  {userReducer, groupReducer, subjectReducer, roomReducer}