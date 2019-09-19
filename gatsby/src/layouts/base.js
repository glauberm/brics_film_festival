import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import 'normalize.css';

import SelectLanguage from '../components/SelectLanguage';
import SocialMedia from '../components/SocialMedia';
import Navigation from '../components/Navigation';
import Timer from '../components/Timer';
import Footer from '../components/Footer';
import {
  colors, breakpoints, containerSize, headingBaseStyle
} from '../styles/theme';

class BaseLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mainNavHeight: 0,
    };
  }

  handleFixedNavigation = () => {
    const mainNavHeight = document.getElementById('main-nav')
      .getBoundingClientRect().height;

    this.setState({
      mainNavHeight: mainNavHeight
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta
            name="robots"
            content={ this.props.noRobots ? 'noindex,nofollow' : 'index,follow' }
          />
          <meta
            name="googlebot"
            content={ this.props.noRobots ? 'noindex,nofollow' : 'index,follow' }
          />
          <meta
            property="og:url"
            content={`${process.env.GATSBY_BASE_URL}${props.pathname}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="BRICS Film Festival" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Montserrat:700display=swap"
            rel="stylesheet"
          />
          <link
            rel="canonical"
            href={`${process.env.GATSBY_BASE_URL}${props.pathname}`}
          />
        </Helmet>
        <Global
          styles={(colors, headingBaseStyle) => GlobalStyles}
        />
        <NoScript key='noscript' id='gatsby-noscript'>
          {this.props.intl.formatMessage({ id: 'noscript' })}
        </NoScript>
        <SkipToContent href='#content'>
          {this.props.intl.formatMessage({ id: 'skipToContent' })}
        </SkipToContent>
        <TopBackground>
          <TopContainer>
            <SelectLanguageContainer>
              <SelectLanguage
                pathname={this.props.pathname}
                langPt={this.props.langPt}
                langEn={this.props.langEn}
              />
            </SelectLanguageContainer>
            <SocialMediaContainer>
              <SocialMedia />
            </SocialMediaContainer>
          </TopContainer>
          <header>
            {this.props.logo}
            <Navigation onFixed={this.handleFixedNavigation}/>
          </header>
        </TopBackground>
        <Timer />
        <Content id='content' mainNavHeight={this.state.mainNavHeight}>
          {this.props.children}
        </Content>
        <Footer logo={this.props.logoFooter} />
      </React.Fragment>
    );
  }
}

const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scrollbar-color: ${colors.green} ${colors.blackLight};

    ::-webkit-scrollbar {
      width: 12px;
      background-color: ${colors.blackLight};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.green};
    }
  }

  body {
    color: ${colors.black};
    background-color: ${colors.white};
    font-size: 14px;
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    line-height: 1.75;
  }

  h1, h2, h3, h4, h5, h6 {
    ${headingBaseStyle}
  }
`;

const NoScript = styled.noscript`
  display: block;
  padding: 0.5em 1em;
  width: 100%;
  text-align: center;
  background-color: ${colors.red};
  color: ${colors.white};
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(29,29,27,0.125);
`;

const SkipToContent = styled.a`
  text-decoration: none;
  display: block;
  position: absolute;
  top: -100%;
  padding: 0.5em 1em;
  width: 100%;
  text-align: center;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(29,29,27,0.125);

  :focus,
  :active {
    position: relative;
  }
`;

const TopBackground = styled.div`
  position: relative;
  background-color: ${colors.blackLight};
  background: radial-gradient(
    farthest-corner at top center,
    ${colors.blackLight},
    ${colors.black}
  );
  
  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${colors.grayDark} 50%,
      transparent 100%
    );
  }
`;

const Content = styled.div`
  .sticky {
    top: ${props => `${props.mainNavHeight+4}px`};
  }

  .sub-sticky {
    top: calc(5em + ${props => `${props.mainNavHeight+4}px`});
  }
`;

const TopContainer = styled.div`
  position: relative;
  max-width: ${containerSize};
  margin: 0 auto;
  padding: 0.5em 1em 0.5em;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${breakpoints.sm}px) {
    padding-top: 1em;
    margin-bottom: -2em;
  }

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: -3em;
  }
`;

const SelectLanguageContainer = styled.div`
  position: relative;
  z-index: 3;
  order: 1;
`;

const SocialMediaContainer = styled.div`
  position: relative;
  z-index: 2;
  order: 0;
  font-size: 0.8em;
`;

export default injectIntl(BaseLayout);