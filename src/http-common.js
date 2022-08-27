import axios from 'axios'

export default axios.create({
    baseURL:
        'http://10.15.20.184:5000/' /*  'https://redis-crm-api.herokuapp.com/' */,
    /*  baseURL: 'http://localhost:5000', */
})
