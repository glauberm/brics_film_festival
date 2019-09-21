import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors, headingBaseStyle } from '../styles/theme';

class Article extends React.PureComponent {
  getHtml(html) {
    if (this.props.shortable && html.length > 1024) {
      return (
        <React.Fragment>
          <div dangerouslySetInnerHTML={{
            __html: `${html.substring(0,1024).trim()}...`
          }}/>
          <Link to={this.props.linkTo}>
            <Button>
              {this.props.intl.formatMessage({ id: 'readMore' })}
            </Button>
          </Link>
        </React.Fragment>
      );
    }
    
    return <div dangerouslySetInnerHTML={{ __html: html }}/>;
  }

  render() {
    return (
      <article itemScope itemType="http://schema.org/Article">
        <h2 className='title' itemProp="name">
          <Link to={this.props.linkTo}
            dangerouslySetInnerHTML={{ __html: this.props.title }} 
          />
          {
            this.props.subtitle &&
            <small
              dangerouslySetInnerHTML={{ __html: this.props.subtitle }}
            />
          }
        </h2>
        {
          this.props.imgFluid &&
          <Img fluid={this.props.imgFluid}/>
        }
        {this.getHtml(this.props.content)}
      </article>
    );
  }
}

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