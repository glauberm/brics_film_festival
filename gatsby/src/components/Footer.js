import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors, breakpoints, containerSize, linkBaseStyle, headingBaseStyle } from '../styles/theme';
import SocialMedia from './SocialMedia';
import Decoration from './Decoration';
import { navigationLinks } from '../data/shared';

class Footer extends PureComponent {
  render() {
    const links = navigationLinks(this.props.intl);

    return (
      <Wrapper>
        <footer>
          <Container>
            <Inner>
              <Sitemap>
                {links.map((link, i) =>
                  <SitemapColumn key={i}>
                    <SitemapHeading>
                      <Link to={link.href}>
                        {link.text}
                      </Link>
                    </SitemapHeading>
                  </SitemapColumn>
                ) }
                <SitemapColumn />
              </Sitemap>
              <LogoColumn>
                <Logo src={this.props.logo} alt='' />
              </LogoColumn>
            </Inner>
          </Container>
          <Container>
            <Credits>
              <CreditsColumn>
                <SocialMediaContainer>
                  <SocialMedia />
                </SocialMediaContainer>
                &copy; {this.props.intl.formatMessage({ id: 'shortSitename' })} {new Date().getFullYear()}. {this.props.intl.formatMessage({ id: 'copyrightText' })}
              </CreditsColumn>
              <CreditsColumn>
                <a href="https://github.com/glauberm/brics_film_festival" target="_blank" rel="noopener noreferrer">{this.props.intl.formatMessage({ id: 'creditsCode' })}</a> {this.props.intl.formatMessage({ id: 'creditsBy' })} <a href="https://github.com/glauberm" target="_blank" rel="noopener noreferrer">Glauber Mota</a>
              </CreditsColumn>
            </Credits>
          </Container>
          <DecorationContainer>
            <Decoration />
          </DecorationContainer>
        </footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  color: ${colors.white};
  background-color: ${colors.blackLight};
  box-shadow: 0 -1px 2px rgba(29,29,27,0.175), 0 -2px 5px rgba(29,29,27,0.25);
  background: radial-gradient(
    farthest-side at top left,
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
      ${colors.grayDark} 0%,
      transparent 75%,
      transparent 100%
    );
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${containerSize};
  margin: 0 auto;
  padding: 1em;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.sm}px) {
    flex-wrap: nowrap;
  }
`;

const Sitemap = styled.div`
  position: relative;
  width: 100%;
  padding: 1em 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.sm}px) {
    order: 1;
    width: 50%;
  }
`;

const SitemapColumn = styled.div`
  width: 50%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.5;

    li:first-of-type a {
      padding-top: 0;
    }
  }
`;

const SitemapHeading = styled.span`
  ${headingBaseStyle}
  padding: 0;
  padding-right: 0.5em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    ${linkBaseStyle}
    display: inline-block;
    padding: 0.5em 0;
    text-shadow: 1px 1px 1px ${colors.black};
  }
`;

const LogoColumn = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: ${breakpoints.sm}px) {
    width: 25%;
    margin-right: 5%;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 6em;

  @media (min-width: ${breakpoints.sm}px) {
    width: 7em;
  }
`;

const Credits = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 0.8em;
  color: ${colors.gray};
  flex-wrap: nowrap;
`;

const CreditsColumn = styled.div`
  width: 100%;
  text-align: center;

  :first-of-type {
    text-align: left;
    padding-right: 0.25em;
  }

  :last-of-type {
    text-align: right;
    padding-left: 0.25em;

    a {
      ${linkBaseStyle}
      color: ${colors.gray};

      :hover,
      :focus {
        text-decoration-color: ${colors.green};
      }
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 0.8em;
`;

const DecorationContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 2px;
  border-top: 1px solid ${colors.black};
`;

export default injectIntl(Footer);