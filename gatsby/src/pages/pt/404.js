import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import BaseLayout from '../../layouts/base.pt';
import NotFound from '../../components/NotFound';
import Logo from '../../components/I18n/pt/Logo';
import logoFooter from '../../images/logo-s.pt.svg';

class PageNotFound extends React.PureComponent {
  render() {
    const data = this.props.data.wordpressBricsPtGeneralSettings;
    const pathname = this.props.location.pathname;

    return (
      <React.Fragment>
        <Helmet htmlAttributes={{'lang': 'pt-BR'}}>
          <title>Página não encontrada - {data.pt_site_title}</title>
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
    wordpressBricsPtGeneralSettings {
      pt_site_title
    }
  }
`;

export default PageNotFound;