import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';

import BaseLayout from './base';
import NotificationProvider from '../components/Notifications';
import Logo from '../components/I18n/pt/Logo';
import messages from '../data/messages/pt';
import ogImg from '../images/og.pt.png';
import logoFooter from '../images/logo-s.pt.svg';

addLocaleData(pt);

const BasePtLayout = (props) => {
  const { wordpressBricsPtGeneralSettings } = useStaticQuery(
    graphql`
      query {
        wordpressBricsPtGeneralSettings {
          pt_site_title
          pt_site_description
        }
      }
    `
  );

  const pageTitle = (props.pageTitle
    ? `${props.pageTitle} - ${wordpressBricsPtGeneralSettings.pt_site_title}`
    : wordpressBricsPtGeneralSettings.pt_site_title
  );
  const description = wordpressBricsPtGeneralSettings.pt_site_description;

  return (
    <IntlProvider
      locale='pt'
      messages={messages}
    >
      <NotificationProvider>
        <React.Fragment>
          <Helmet htmlAttributes={{'lang': 'pt-BR'}}>
            <title>{decodeURI(pageTitle)}</title>
            <meta name="description" content={description}/>
            <meta property="og:locale" content="pt-BR" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:image" content={ogImg} />
            <meta property="og:image:alt" content="BRICS Film Festival" />
            <meta property="og:description" content={description} />
            <link
              rel="alternate"
              href={'http://bricsfilmfestival.com.br' + props.langEn}
              hreflang="en"
            />
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
      </NotificationProvider>
    </IntlProvider>
  );
};

export default BasePtLayout;