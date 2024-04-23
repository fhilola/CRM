import { GET, GET_GROUP, GET_ROOM, GET_SUBJECT, GET_USER } from ".";
import instance
 from "../../api";

 const get_users = (users)=>{
    return {
        type: GET_USER,
        payload: {
            users
        }
    }
 }
 const get_groups = (groups)=>{
    return {
        type: GET_GROUP,
        payload: {
            groups
        }
    }
 }
 const get_subjects = (subjects)=>{
    return {
        type: GET_SUBJECT,
        payload: {
            subjects
        }
    }
 }
 const get_rooms = (rooms)=>{
    return {
        type: GET_ROOM,
        payload: {
            rooms
        }
    }
 }

 const getUsers = () => async dispatch => {
    instance('user/')
    .then(response => {
        if(response.status === 200){
            dispatch(get_users(response.data))
        }
    })
 }

const getGroup = () => async dispatch => {
    instance('group/')
    .then(response => {
        if(response.status === 200){
            dispatch(get_groups(response.data))
        }
    })
}

const getSubjects = () => async dispatch => {
    instance('subject/')
    .then(response => {
        if(response.status === 200){
            dispatch(get_subjects(response.data))
        }
    })
}
const getRooms = () => async dispatch => {
    instance('room/')
    .then(response => {
        if(response.status === 200){
            dispatch(get_rooms(response.data))
        }
    })
}

export {getUsers, getGroup, getSubjects, getRooms}