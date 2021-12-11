import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import './Error-message.styles.scss';


export const ErrorMessage = ({errMess}) => {
  return (
    <React.Fragment>
      <FaExclamationCircle className="error-message-icon"/>
      <h4>Ooops!</h4>
      <span>{errMess}</span>
    </React.Fragment>
  );
};
