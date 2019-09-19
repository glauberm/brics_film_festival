import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import messages from '../../data/messages/en';
import BaseLayout from '../../layouts/base.en';
import NotFound from '../../components/NotFound';
import Logo from '../../components/I18n/en/Logo';
import logoFooter from '../../images/logo-s.en.svg';

addLocaleData(en);

class PageNotFound extends React.PureComponent {
  render() {
    const data = this.props.data.wordpressBricsEnSiteInfo;
    const pathname = this.props.location.pathname;

    return (
      <IntlProvider
        locale='en'
        messages={messages}
      >
        <React.Fragment>
          <Helmet htmlAttributes={{'lang': 'en'}}>
            <title>Page not found - {data.en_site_info_title}</title>
          </Helmet>
          <BaseLayout
            pathname={this.props.pathname}
            logo={<Logo pathname={this.props.pathname} />}
            logoFooter={logoFooter}
          >
            <NotFound />
          </BaseLayout>
        </React.Fragment>
      </IntlProvider>
    );
  }
}

export const query = graphql`
  query {
    wordpressBricsEnSiteInfo {
      en_site_info_title
    }
  }
`;

export default PageNotFound;