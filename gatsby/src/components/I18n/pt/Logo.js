import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BaseLogo from '../../Logo';
import logo from '../../../images/logo.pt.svg';

const Logo = (props) => {
  const { wordpressBricsPtSiteInfo } = useStaticQuery(
    graphql`
      query {
        wordpressBricsPtSiteInfo {
          pt_site_info_title
        }
      }
    `
  );

  return (
    <BaseLogo pathname={props.pathname}>
      <img src={logo}
        alt={wordpressBricsPtSiteInfo.pt_site_info_title}
      />
    </BaseLogo>
  );
};

export default Logo;