import { GET_GROUP, GET_ROOM, GET_SUBJECT, GET_USER } from "../actions/index"

const initialState = {
    foydalanuvchilar: null,
    isloading: false,
    isError: false,
    isGet: false
}

const groupInfo = {
    guruhlar: null,
    isloading: false,
    isError: false,
    isGet: false
}
const subjectInfo = {
    fanlar: null,
    isloading: false,
    isError: false,
    isGet: false
}
const roomInfo = {
    xonalar: null,
    isloading: false,
    isError: false,
    isGet: false
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER:
            return {
                foydalanuvchilar: payload.users,
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
                guruhlar: payload.groups,
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
                fanlar: payload.subjects,
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
                xonalar: payload.rooms,
                isloading: false,
                isError: false,
                isGet: true
            }
        default:
            return state
    }
}

export  {userReducer, groupReducer, subjectReducer, roomReducer}