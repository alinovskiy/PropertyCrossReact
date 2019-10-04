import * as React from 'react';

import './index.css'

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => (
  <span className="alert alert-danger text-center displayBlock" role="alert" >
    {message}
  </span>
);
