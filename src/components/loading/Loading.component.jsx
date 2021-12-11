import React from "react";
import { FaSpinner } from "react-icons/fa";

import './Loading.styles.scss';

export const Loading = () => {
  return (
    <React.Fragment>
      <p>Loading</p>
      <FaSpinner className="loading-spin"/>
    </React.Fragment>
  );
};
