import { toast } from "react-toastify";
import instance from "../../api";
import { CREATE_ERROR, CREATE_LOADING, CREATE } from "./index";


const create = (created) => {
    return {
        type: CREATE,
        payload: {
            created
        }
    }
}

const createUser = (USER, endpoint) => async dispatch => {
    instance.post(`${endpoint}`, USER)
        .then(response => {
            if (response.status === 201) {
                console.log(response);
                dispatch(create(response))
                toast.success('Muvaffaqiyatli yaratildi', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        })
        .catch(error => {
            toast.error(error.response.data.username[0], {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log();
        })
}

export { createUser }