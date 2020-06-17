import { combineReducers } from 'redux';

import templatesReducer from './templates/templates.reducer';

export default combineReducers({
  deployment: templatesReducer,
});
