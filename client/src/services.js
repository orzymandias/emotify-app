import axios from 'axios';

export const fetchEmployees = () => {
  return axios.get('http://dummy.restapiexample.com/api/v1/employees');
};

/**
 * @param {string} feature  - textual feature input by user in search bar
 */
export const postText = (feature) => {
  const options = {
    url: `${process.env.REACT_APP_HOST}/api/model/predict`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      feature,
    },
  };
  return axios(options);
};
