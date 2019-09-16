import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';

import messages from '../data/messages/pt';
import BaseLayout from './base';
import Logo from '../components/I18n/pt/Logo';
import ogImg from '../images/og.pt.png';
import logoFooter from '../images/logo-s.pt.svg';
import { baseUrl } from '../data/shared';

addLocaleData(pt);

const BasePtLayout = (props) => {
  const { wordpressBricsPtSiteInfo } = useStaticQuery(
    graphql`
      query {
        wordpressBricsPtSiteInfo {
          pt_site_info_title
          pt_site_info_description
        }
      }
    `
  );

  const pageTitle = (props.pageTitle ? props.pageTitle + ' - ' : '')
    + wordpressBricsPtSiteInfo.pt_site_info_title;
  const description = wordpressBricsPtSiteInfo.pt_site_info_description;

  return (
    <IntlProvider
      locale='pt'
      messages={messages}
    >
      <React.Fragment>
        <Helmet htmlAttributes={{'lang': 'pt-BR'}}>
          <title>{decodeURI(pageTitle)}</title>
          <meta name="description" content={description}/>
          <meta property="og:locale" content="pt-BR" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:image" content={ogImg} />
          <meta property="og:image:alt" content="BRICS Film Festival" />
          <meta property="og:description" content={description} />
          <link rel="alternate" href={baseUrl + props.langEn} hreflang="en" />
        </Helmet>
        <BaseLayout
          pathname={props.pathname}
          langPt={props.pathname}
          langEn={props.langEn}
          noRobots={props.noRobots}
          logo={<Logo pathname={props.pathname} />}
          logoFooter={logoFooter}
        >
          {props.children}
        </BaseLayout>
      </React.Fragment>
    </IntlProvider>
  );
};

export default BasePtLayout;