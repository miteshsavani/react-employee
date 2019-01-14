import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-employee.firebaseio.com/'
})

export default instance;