import React, { useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import BaseLayout from './base';
import Logo from '../components/I18n/pt/Logo';
import { IntlProviderWrapperContext } from '../components/IntlProviderWrapper';
import ogImg from '../images/og.pt.png';
import logoFooter from '../images/logo-s.pt.svg';

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

  const context = useContext(IntlProviderWrapperContext);

  useEffect(() => { context.setLanguage('pt'); }, []);

  const pageTitle = (props.pageTitle
    ? `${props.pageTitle} - ${wordpressBricsPtGeneralSettings.pt_site_title}`
    : wordpressBricsPtGeneralSettings.pt_site_title
  );
  const description = wordpressBricsPtGeneralSettings.pt_site_description;

  return (
    <React.Fragment>
      <Helmet htmlAttributes={{'lang': 'pt'}}>
        <title>{decodeURI(pageTitle)}</title>
        <meta name="description" content={description}/>
        <meta property="og:locale" content="pt" />
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
        langPt={props.pathname}
        langEn={props.langEn}
        noRobots={props.noRobots}
        logo={<Logo pathname={props.pathname} />}
        logoFooter={logoFooter}
      >
        {props.children}
      </BaseLayout>
    </React.Fragment>
  );
};

export default BasePtLayout;