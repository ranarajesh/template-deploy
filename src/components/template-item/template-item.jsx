import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './template-item.scss';

import CustomButton from '../../components/custom-button/custom-button';
import CustomTag from '../custom-tag/custom-tag';

import {
  deleteTemplateStart,
  deploymentComplete,
} from '../../redux/templates/templates.actions';
import ProgressBar from '../progress-bar/progress-bar';

const TemplateItem = ({
  item,
  history,
  deleteTemplateStart,
  deploymentComplete,
}) => {
  let { templateName, deployedAt, version, url, _id, newTemplate } = item;
  const memoizedCallback = useCallback(() => {
    deploymentComplete(item);
  }, [deploymentComplete, item]);

  const handleComplate = (item) => {
    //delete item.newTemplate;
    //deploymentComplete(item);
    memoizedCallback();
  };
  return (
    <div className="temp-item">
      <div className="temp-grid">
        <div className="grid-item">{_id}</div>
        <div className="grid-item">{templateName}</div>
        <div className="grid-item">
          {version.map((ver, i) => {
            return ver ? <CustomTag key={i}>{ver}</CustomTag> : '';
          })}
        </div>
        <div className="grid-item">
          {url ? (
            <p className="url">
              <a href={url}>{url}</a>
            </p>
          ) : (
            <span>--N/A--</span>
          )}
        </div>
        <div className="grid-item">
          {newTemplate ? (
            <span>Deploying...</span>
          ) : (
            new Date(deployedAt).toLocaleString()
          )}
        </div>
        <div className="grid-item">
          {newTemplate ? (
            <ProgressBar
              timesInSeconds={120}
              handleDone={() => handleComplate(item)}
            />
          ) : (
            <CustomButton
              isdeletebtn="true"
              onClick={() => deleteTemplateStart(_id)}
            >
              <span>Delete</span>
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTemplateStart: (_id) => dispatch(deleteTemplateStart({ _id })),
  deploymentComplete: (_id) => dispatch(deploymentComplete(_id)),
});

export default withRouter(connect(null, mapDispatchToProps)(TemplateItem));
