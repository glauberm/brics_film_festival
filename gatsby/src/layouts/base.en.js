import React, { useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import BaseLayout from './base';
import Logo from '../components/I18n/en/Logo';
import { IntlProviderWrapperContext } from '../components/IntlProviderWrapper';
import ogImg from '../images/og.en.png';
import logoFooter from '../images/logo-s.en.svg';

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

  const context = useContext(IntlProviderWrapperContext);

  useEffect(() => { context.setLanguage('en'); }, []);

  const pageTitle = (props.pageTitle
    ? `${props.pageTitle} - ${wordpressBricsEnGeneralSettings.en_site_title}`
    : wordpressBricsEnGeneralSettings.en_site_title
  );
  const description = wordpressBricsEnGeneralSettings.en_site_description;

  return (
    <React.Fragment>
      <Helmet htmlAttributes={{'lang': 'en'}}>
        <title>{decodeURI(pageTitle)}</title>
        <meta name="description" content={description}/>
        <meta property="og:locale" content="en" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:secure_url" content={ogImg} />
        <meta property="og:image:alt" content="BRICS Film Festival" />
        <meta property="og:description" content={description} />
        <link
          rel="alternate"
          href={`${process.env.GATSBY_BASE_URL}${props.langPt}`}
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
  );
};

export default BaseEnLayout;