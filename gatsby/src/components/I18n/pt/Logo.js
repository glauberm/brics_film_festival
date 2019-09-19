import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BaseLogo from '../../Logo';
import logo from '../../../images/logo.pt.svg';

const Logo = (props) => {
  const { wordpressBricsPtGeneralSettings } = useStaticQuery(
    graphql`
      query {
        wordpressBricsPtGeneralSettings {
          pt_site_title
        }
      }
    `
  );

  return (
    <BaseLogo pathname={props.pathname}>
      <img src={logo}
        alt={wordpressBricsPtGeneralSettings.pt_site_title}
      />
    </BaseLogo>
  );
};

export default Logo;