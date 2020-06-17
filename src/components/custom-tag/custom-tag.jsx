import React from 'react';
import './custom-tag.scss';

const CustomTag = ({ children }) => {
  return <span className="tag">{children}</span>;
};

export default CustomTag;
