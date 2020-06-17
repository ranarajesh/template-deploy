import React from 'react';
import { connect } from 'react-redux';
import './template-list.scss';
import TemplateItem from '../../components/template-item/template-item';
import { createStructuredSelector } from 'reselect';

import { selectDeploymentTemplates } from '../../redux/templates/templates.selector';

import CreateTemplate from '../create-template/create-template';

const TemplateList = ({ templates }) => {
  return (
    <div>
      <CreateTemplate />
      <div className="temp-grid grid-header">
        <label>ID #</label>
        <label>Template Name</label>
        <label>versions</label>
        <label>Url</label>
        <label>Deployed At</label>
        <label>Action</label>
      </div>
      {templates.map((item, i) => {
        return <TemplateItem key={i} item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  templates: selectDeploymentTemplates,
});
export default connect(mapStateToProps)(TemplateList);
