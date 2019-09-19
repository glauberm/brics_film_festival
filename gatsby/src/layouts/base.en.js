import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import BaseLayout from './base';
import NotificationProvider from '../components/Notifications';
import Logo from '../components/I18n/en/Logo';
import messages from '../data/messages/en';
import ogImg from '../images/og.en.png';
import logoFooter from '../images/logo-s.en.svg';

addLocaleData(en);

const BaseEnLayout = (props) => {
  const { wordpressBricsEnGeneralSettings } = useStaticQuery(
    graphql`
      query {
        wordpressBricsEnGeneralSettings {
          en_site_title
          en_site_description
        }
      }
    `
  );

  const pageTitle = (props.pageTitle
    ? `${props.pageTitle} - ${wordpressBricsEnGeneralSettings.en_site_title}`
    : wordpressBricsEnGeneralSettings.en_site_title
  );
  const description = wordpressBricsEnGeneralSettings.en_site_description;

  return (
    <IntlProvider
      locale='en'
      messages={messages}
    >
      <NotificationProvider>
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
              href={'https://bricsfilmfestival.com.br' + props.langPt}
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
      </NotificationProvider>
    </IntlProvider>
  );
};

export default BaseEnLayout;