import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Container, Input } from 'semantic-ui-react';

import { fetchTemplatesStart } from './redux/templates/templates.actions';
import TemplateListContainer from './components/template-list-container/template-list-container';
import TTNames from './components/TTNames/ttnames.component';

//import ShapeDivider from './components/shape-divider/shape-divider-component';
const App = ({ fetchTemplatesStart }) => {
  useEffect(() => {
    let unsubscribe = fetchTemplatesStart();

    return () => {
      unsubscribe();
    };
  }, [fetchTemplatesStart]);
  return (
    <div className="App">
      <TTNames />
      {/* <ShapeDivider /> */}
      {/* <TemplateListContainer /> */}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchTemplatesStart: () => dispatch(fetchTemplatesStart()),
});
export default connect(null, mapDispatchToProps)(App);
