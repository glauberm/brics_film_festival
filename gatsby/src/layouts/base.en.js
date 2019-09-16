import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import messages from '../data/messages/en';
import BaseLayout from './base';
import Logo from '../components/I18n/en/Logo';
import ogImg from '../images/og.en.png';
import logoFooter from '../images/logo-s.en.svg';

addLocaleData(en);

const BaseEnLayout = (props) => {
  const { wordpressBricsEnSiteInfo } = useStaticQuery(
    graphql`
      query {
        wordpressBricsEnSiteInfo {
          en_site_info_title
          en_site_info_description
        }
      }
    `
  );

  const pageTitle = (props.pageTitle
    ? `${props.pageTitle} - ${wordpressBricsEnSiteInfo.en_site_info_title}`
    : wordpressBricsEnSiteInfo.en_site_info_title
  );
  const description = wordpressBricsEnSiteInfo.en_site_info_description;

  return (
    <IntlProvider
      locale='en'
      messages={messages}
    >
      <React.Fragment>
        <Helmet htmlAttributes={{'lang': 'en'}}>
          <title>{decodeURI(pageTitle)}</title>
          <meta name="description" content={description}/>
          <meta property="og:locale" content="en" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:image" content={ogImg} />
          <meta property="og:image:alt" content="BRICS Film Festival" />
          <meta property="og:description" content={description} />
          <link
            rel="alternate"
            href={process.env.BASE_URL + props.langPt}
            hreflang="pt-BR"
          />
        </Helmet>
        <BaseLayout
          pathname={props.pathname}
          langPt={props.langPt}
          langEn={props.pathname}
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

export default BaseEnLayout;