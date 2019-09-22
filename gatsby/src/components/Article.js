import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';
import html_substring from 'html-substring';

import { colors, headingBaseStyle } from '../styles/theme';

class Article extends React.PureComponent {
  getHtml(html) {
    if (this.props.shortable && html.length > 999) {
      return (
        <React.Fragment>
          <TextContainer
            dangerouslySetInnerHTML={{
              __html: html_substring(html, 999, { suffix: '...'})
            }}
          />
          <Link to={this.props.linkTo}>
            <Button>
              {this.props.intl.formatMessage({ id: 'readMore' })}
            </Button>
          </Link>
        </React.Fragment>
      );
    }
    
    return (
      <TextContainer dangerouslySetInnerHTML={{ __html: html }} />
    );
  }

  render() {
    return (
      <article>
        <h2 className='title'>
          <Link to={this.props.linkTo}
            dangerouslySetInnerHTML={{ __html: this.props.title }} 
          />
          {
            this.props.subtitle &&
            <React.Fragment>
              <br />
              <small
                dangerouslySetInnerHTML={{ __html: this.props.subtitle }}
              />
            </React.Fragment>
          }
        </h2>
        {
          this.props.imgFluid &&
          <Img fluid={this.props.imgFluid} />
        }
        {this.getHtml(this.props.content)}
      </article>
    );
  }
}

const TextContainer = styled.div`
  margin-bottom: 1em;
  word-break: break-word;

  p:last-of-type {
    display: inline;
  }
`;

const Button = styled.span`
  ${headingBaseStyle}
  display: inline-block;
  padding: 0.75em 1.5em;
  background-color: ${colors.grayLightest};
  border: 1px solid ${colors.grayLight};
  color: ${colors.black};
  border-radius: 2em;
  transition:
    color 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease
  ;
  
  :hover,
  :focus,
  :active {
    outline: none;
  }

  :hover,
  :focus {
    background-color: ${colors.grayLight};
  }

  :active {
    color: ${colors.white};
    border-color: ${colors.blue};
    background-color: ${colors.blue};
  }
`;

export default injectIntl(Article);