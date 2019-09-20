import IntlProviderWrapper from './src/components/IntlProviderWrapper';
import NotificationProvider from './src/components/Notifications';

export const wrapRootElement = ({ element }) => (
  <IntlProviderWrapper>
    <NotificationProvider>{element}</NotificationProvider>
  </IntlProviderWrapper>
);
