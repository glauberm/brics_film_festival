import React from 'react';

import NotificationProvider from './src/components/Notification';

export const wrapRootElement = ({ element }) => {
  return (
    <NotificationProvider>
      {element}
    </NotificationProvider>
  );
};
