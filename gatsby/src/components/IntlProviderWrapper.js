import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ptLocaleData from 'react-intl/locale-data/pt';
import enLocaleData from 'react-intl/locale-data/en';

import ptMessages from '../data/messages/pt';
import enMessages from '../data/messages/en';

addLocaleData([...ptLocaleData, ...enLocaleData]);

export const IntlProviderWrapperContext = React.createContext();

class IntlProviderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'pt',
      messages: ptMessages
    };
  }

  setLanguage = (locale) => {
    switch (locale) {
    case 'pt':
      this.setState({ messages: ptMessages });
      break;
    case 'en':
      this.setState({ messages: enMessages });
      break;
    }

    this.setState({ locale: locale });
  }

  render() {
    const context = {
      setLanguage: this.setLanguage,
    };

    return (
      <IntlProviderWrapperContext.Provider value={context}>
        <IntlProvider
          locale={this.state.locale}
          key={this.state.locale}
          messages={this.state.messages}
          defaultLocale='pt'
        >
          {this.props.children}
        </IntlProvider>
      </IntlProviderWrapperContext.Provider>
    );
  }
}

export default IntlProviderWrapper;