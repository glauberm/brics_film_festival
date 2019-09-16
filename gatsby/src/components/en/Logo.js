import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BaseLogo from '../Logo';
import logo from '../../images/logo.en.svg';

const Logo = (props) => {
  const { wordpressBricsEnSiteInfo } = useStaticQuery(
    graphql`
      query {
        wordpressBricsEnSiteInfo {
          en_site_info_title
        }
      }
    `
  );

  return (
    <BaseLogo pathname={props.pathname}>
      <img src={logo}
        alt={wordpressBricsEnSiteInfo.en_site_info_title}
      />
    </BaseLogo>
  );
};

export default Logo;