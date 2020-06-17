// https://deployment-apiv1.herokuapp.com/api/v1/deployments
import axios from 'axios';

const BASE_URL = 'https://deployment-apiv1.herokuapp.com';
//const BASE_URL = 'http://localhost:3000';
export const getFetchCall = async ({
  baseUrl = BASE_URL,
  endpoint = '',
  method = 'get',
} = {}) => {
  const result = await axios.get(`${baseUrl}${endpoint}`);
  return result.data;
};

export const postFetchCall = async ({
  baseUrl = BASE_URL,
  endpoint = '',
  method = 'post',
  data = {},
}) => {
  try {
    const result = await axios.post(`${baseUrl}${endpoint}`, data);
    return result.data;
  } catch (error) {
    console.log('ERRR ', error);
    // return error;
  }
};

export const deleteFetchCall = async ({
  baseUrl = BASE_URL,
  endpoint = '',
  method = 'delete',
}) => {
  try {
    const result = await axios.delete(`${baseUrl}${endpoint}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const putFetchCall = async ({
  baseUrl = BASE_URL,
  endpoint = '',
  method = 'put',
  data = {},
}) => {
  try {
    const result = await axios.put(`${baseUrl}${endpoint}`, data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
