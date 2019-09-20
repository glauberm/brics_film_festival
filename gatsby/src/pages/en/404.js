import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import BaseLayout from '../../layouts/base.en';
import NotFound from '../../components/NotFound';
import Logo from '../../components/I18n/en/Logo';
import logoFooter from '../../images/logo-s.en.svg';

class PageNotFound extends React.PureComponent {
  render() {
    const data = this.props.data.wordpressBricsEnGeneralSettings;
    const pathname = this.props.location.pathname;

    return (
      <React.Fragment>
        <Helmet htmlAttributes={{'lang': 'en'}}>
          <title>Page not found - {data.en_site_title}</title>
        </Helmet>
        <BaseLayout
          pathname={pathname}
          logo={<Logo pathname={pathname} />}
          logoFooter={logoFooter}
        >
          <NotFound />
        </BaseLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query {
    wordpressBricsEnGeneralSettings {
      en_site_title
    }
  }
`;

export default PageNotFound;