import React, { useState, useEffect } from 'react';

import './progress-bar.scss';

const ProgressBar = ({ timesInSeconds = 60, handleDone }) => {
  const [progessTimer, setProgressTimer] = useState(0);

  useEffect(() => {
    let interval = null;
    if (progessTimer <= 100) {
      interval = setTimeout(() => {
        setProgressTimer(progessTimer + 1);
      }, timesInSeconds * 10);
    } else {
      handleDone();
      clearTimeout(interval);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [progessTimer, timesInSeconds]);
  return <progress value={progessTimer} max="100" className="progress-bar" />;
};

export default ProgressBar;
