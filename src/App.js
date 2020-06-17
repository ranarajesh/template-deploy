import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { fetchTemplatesStart } from './redux/templates/templates.actions';
import TemplateListContainer from './components/template-list-container/template-list-container';

const App = ({ fetchTemplatesStart }) => {
  useEffect(() => {
    let unsubscribe = fetchTemplatesStart();

    return () => {
      unsubscribe();
    };
  }, [fetchTemplatesStart]);
  return (
    <div className="App">
      <TemplateListContainer />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchTemplatesStart: () => dispatch(fetchTemplatesStart()),
});
export default connect(null, mapDispatchToProps)(App);
