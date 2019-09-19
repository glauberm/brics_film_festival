import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';

import messages from '../../data/messages/pt';
import BaseLayout from '../../layouts/base.pt';
import NotFound from '../../components/NotFound';
import Logo from '../../components/I18n/pt/Logo';
import logoFooter from '../../images/logo-s.pt.svg';

addLocaleData(pt);

class PageNotFound extends React.PureComponent {
  render() {
    const data = this.props.data.wordpressBricsPtGeneralSettings;
    const pathname = this.props.location.pathname;

    return (
      <IntlProvider
        locale='pt'
        messages={messages}
      >
        <React.Fragment>
          <Helmet htmlAttributes={{'lang': 'pt-BR'}}>
            <title>Página não encontrada - {data.pt_site_title}</title>
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
    wordpressBricsPtGeneralSettings {
      pt_site_title
    }
  }
`;

export default PageNotFound;