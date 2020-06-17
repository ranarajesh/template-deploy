import React, { useState } from 'react';
import { connect } from 'react-redux';
import './create-template.scss';
import CustomButton from '../../components/custom-button/custom-button';
import FormInput from '../../components/form-input/form-input';

import { createTemplateStart } from '../../redux/templates/templates.actions';

const CreateTemplate = ({ createTemplateStart }) => {
  const [tempInfo, setTempInfo] = useState({
    tempName: '',
    version: '',
    url: '',
  });

  const { tempName, version, url } = tempInfo;

  const handleSubmit = (event) => {
    event.preventDefault();
    // for version input semver validation
    if (!/^([0-9]+).([0-9]+).([0-9]+)$/.test(version)) {
      alert('Invalid version number');
      return;
    }
    if (
      url.length &&
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
        url
      )
    ) {
      alert('Invalid URL');
      return;
    }
    createTemplateStart({
      templateName: tempName,
      version,
      url,
    });
    setTempInfo({
      tempName: '',
      version: '',
      url: '',
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTempInfo({
      ...tempInfo,
      [name]: value,
    });
  };

  return (
    <div className="newtemp-container">
      <h2 className="heading">Create New Template</h2>
      <form onSubmit={handleSubmit} className="form">
        <FormInput
          name="tempName"
          type="text"
          value={tempName}
          handleChange={handleChange}
          label="Template Name"
          required
        />
        <FormInput
          name="version"
          type="text"
          value={version}
          handleChange={handleChange}
          label="Version"
          required
        />
        <FormInput
          name="url"
          type="text"
          value={url}
          handleChange={handleChange}
          label="Url"
        />

        <CustomButton type="submit">Add Template</CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  createTemplateStart: (tempObj) => dispatch(createTemplateStart(tempObj)),
});

export default connect(null, mapDispatchToProps)(CreateTemplate);
