import React from 'react';
import LoadingSpinner from "../../../../assets/images/loading-spinner.gif";

const Loading = () => (
  <div className="loading-container">
    <img src={LoadingSpinner}></img>
  </div>
);

export default Loading;