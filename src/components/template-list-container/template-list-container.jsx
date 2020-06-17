import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner';

import TemplateList from '../../pages/template-list/template-list';
import { selectIsLoading } from '../../redux/templates/templates.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const TemplateListContainer = connect(mapStateToProps)(
  WithSpinner(TemplateList)
);
export default TemplateListContainer;
