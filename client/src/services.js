import axios from 'axios';

export const fetchEmployees = () => {
    return axios.get('http://dummy.restapiexample.com/api/v1/employees')
}