import {
  getFetchCall,
  postFetchCall,
  deleteFetchCall,
  putFetchCall,
} from '../utills/fetchCall';

export const getTemplatesSnapshot = async () => {
  return await getFetchCall({
    //baseUrl: 'http://localhost:3000',
    method: 'get',
    endpoint: '/api/v1/deployments',
  });
};

export const createTemplate = async (data) => {
  return await postFetchCall({
    method: 'post',
    endpoint: '/api/v1/deployments',
    data,
  });
};

export const deleteTemplate = async (id) => {
  return await deleteFetchCall({
    method: 'delete',
    endpoint: `/api/v1/deployments/${id}`,
  });
};

export const updateTemplate = async ({ tempInfo, id }) => {
  return await putFetchCall({
    method: 'put',
    endpoint: `/api/v1/deployments/${id}`,
    data: tempInfo,
  });
};
