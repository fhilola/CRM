import instance from "../../api";
import { CREATE_GROUP, CREATE_ROOM, CREATE_SUBJECT, CREATE_TIME, CREATE_USER, CREATE_USER_ERROR, CREATE_USER_LOADING } from "./index";


const create_user = (user) => {
    return{
        type: CREATE_USER,
        payload: {
            user
        }
    }
}

const createUser = (USER, endpoint )=> async dispatch =>{
    instance.post(`${endpoint}`, USER)
    .then(response => {
        if(response.status === 201){
            console.log(response);
            dispatch(create_user(response))
        }
    })
    .catch(error => console.log(error))
}

export {createUser}