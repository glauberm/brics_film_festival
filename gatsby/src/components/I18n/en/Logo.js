import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BaseLogo from '../../Logo';
import logo from '../../../images/logo.en.svg';

const Logo = (props) => {
  const { wordpressBricsEnGeneralSettings } = useStaticQuery(
    graphql`
      query {
        wordpressBricsEnGeneralSettings {
          en_site_title
        }
      }
    `
  );

  return (
    <BaseLogo pathname={props.pathname}>
      <img src={logo}
        alt={wordpressBricsEnGeneralSettings.en_site_title}
      />
    </BaseLogo>
  );
};

export default Logo;