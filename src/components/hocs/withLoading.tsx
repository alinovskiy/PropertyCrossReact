import * as React from 'react';

import { Spinner } from '@app/components/common/Spinner';

export const WithLoading = (Component: React.ComponentType) => (props: any) => (
  <>
    <Component {...props} />
    {props.isLoading && <Spinner />}
  </>
);
