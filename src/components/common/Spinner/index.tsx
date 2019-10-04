import * as React from 'react';

export const Spinner: React.FC = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
