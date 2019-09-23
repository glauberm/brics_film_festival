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
        <div itemScope itemType='http://schema.org/Event'>
          <meta
            itemProp='startDate'
            content='2019-09-23T00:00'
          />
          <meta
            itemProp='endDate'
            content='2019-10-09T23:59'
          />
          <meta
            itemProp='name'
            content='4º Festival de Cinema BRICS'
          />
          <meta
            itemProp='description'
            content={description}
          />
          <meta
            itemProp='image'
            content={ogImg}
          />
          <meta itemProp='duration' content="P17D" />
          <div itemProp='location' itemScope itemType='http://schema.org/Place'>
            <meta itemProp='name' content='Niterói - Brasil' />
            <div itemProp='address'
              itemScope itemType='http://schema.org/PostalAddress'
            >
              <meta itemProp='addressCountry' content='Brasil' />
              <meta itemProp='addressRegion' content='Niterói' />
            </div>
          </div>
        </div>
        {props.children}
      </BaseLayout>
    </React.Fragment>
  );
};

export default BasePtLayout;