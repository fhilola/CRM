import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reto.pythonanywhere.com/',
    headers: {
        'Content-Type' : 'application/json',
        "Accept" : 'application/json'
    },
})

export default instance