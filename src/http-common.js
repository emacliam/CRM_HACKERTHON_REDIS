import axios from 'axios'

export default axios.create({
    baseURL: 'https://redis-crm-api.herokuapp.com/',
    /*  baseURL: 'http://localhost:5000', */
})
