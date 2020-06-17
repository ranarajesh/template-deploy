import templatesTypes from './templates.types';

export const fetchTemplatesStart = () => ({
  type: templatesTypes.FETCH_TEMPLATES_START,
});

export const fetchTemplatesSuccess = (templates) => ({
  type: templatesTypes.FETCH_TEMPLATES_SUCCESS,
  payload: templates,
});

export const fetchTemplatesFailure = (error) => ({
  type: templatesTypes.FETCH_TEMPLATES_FAILURE,
  payload: error,
});

export const deleteTemplateStart = (_id) => ({
  type: templatesTypes.DELETE_TEMPLATE_START,
  payload: _id,
});

export const deleteTemplateSuccess = (_id) => ({
  type: templatesTypes.DELETE_TEMPLATE_SUCCESS,
  payload: _id,
});

export const deleteTemplateFailure = (error) => ({
  type: templatesTypes.DELETE_TEMPLATE_FAILURE,
  payload: error,
});

export const createTemplateStart = (tempObj) => ({
  type: templatesTypes.CREATE_TEMPLATE_START,
  payload: tempObj,
});

export const createTemplateSuccess = (newObj) => ({
  type: templatesTypes.CREATE_TEMPLATE_SUCCESS,
  payload: newObj,
});

export const createTemplateFailure = (error) => ({
  type: templatesTypes.CREATE_TEMPLATE_FAILURE,
  payload: error,
});

export const deploymentComplete = (item) => ({
  type: templatesTypes.DEPLOYMENT_TEMPLATE_DONE,
  payload: item,
});
