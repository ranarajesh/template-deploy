import templatesTypes from './templates.types';
import { removeTemplateFromList } from './templates.utills';

const INITIAL_STATE = {
  templates: [],
  isLoading: false,
  error: null,
};

const templatesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case templatesTypes.FETCH_TEMPLATES_START:
      return { ...state, isLoading: true };
    case templatesTypes.FETCH_TEMPLATES_SUCCESS:
      return {
        ...state,
        templates: action.payload,
        isLoading: false,
        error: null,
      };
    case templatesTypes.CREATE_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        templates: [action.payload, ...state.templates],
      };
    case templatesTypes.DELETE_TEMPLATE_SUCCESS:
      return {
        ...state,
        error: null,
        templates: removeTemplateFromList(state.templates, action.payload),
      };
    case templatesTypes.FETCH_TEMPLATES_FAILURE:
    case templatesTypes.DELETE_TEMPLATE_FAILURE:
    case templatesTypes.CREATE_TEMPLATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case templatesTypes.DEPLOYMENT_TEMPLATE_DONE:
      return {
        ...state,
        templates: [
          { ...action.payload, newTemplate: false },
          ...state.templates.slice(1),
        ],
      };
    default:
      return state;
  }
};

export default templatesReducer;
