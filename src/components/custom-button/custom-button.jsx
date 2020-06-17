import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, ...otherProps }) => {
  let classValue = 'button-container';
  if (otherProps.isdeletebtn) {
    classValue = 'button-container delete-btn';
  } else if (otherProps.isupdatebtn) {
    classValue = 'button-container update-btn';
  }
  return (
    <button className={`${classValue}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
