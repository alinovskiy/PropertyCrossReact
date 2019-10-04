import * as React from 'react';

import { ConnectedServicePanel } from '@app/containers/ConnectedServicePanel';
import { ConnectedSearchPanel } from '@app/containers/ConnectedSearchPanel';

export const SearchInitialPage: React.FC = () => (
  <>
    <ConnectedSearchPanel />
    <ConnectedServicePanel />
  </>
);
