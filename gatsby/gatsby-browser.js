import React from 'react';

import NotificationProvider from './src/components/Notifications';

export const wrapRootElement = ({ element }) => {
  return (
    <NotificationProvider>
      {element}
    </NotificationProvider>
  );
};
