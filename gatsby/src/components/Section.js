import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors } from '../styles/theme';

class Section extends PureComponent {
  render() {
    return(
      <SectionElement>
        <header>
          <h2 className='title'>
            {this.props.linkTo
              ? <Link to={this.props.linkTo}>{this.props.title}</Link>
              : <span>{this.props.title}</span>
            }
          </h2>
        </header>
        {this.props.children}
      </SectionElement>
    );
  }
}

const SectionElement = styled.section`
  padding: 0 1em 1em;
  border-top: 1px solid ${colors.grayLightest};
  border-left: 1px solid ${colors.grayLighter};
  border-right: 1px solid ${colors.grayLighter};
  border-bottom: 1px solid ${colors.grayLight};
  border-radius: 1em;
  background-color: ${colors.white};
  box-shadow: 0 2px 2px -2px ${colors.grayLightest};

  .title {
    margin-top: -0.666em;
    margin-bottom: 0.5em;
    font-size: 1.175em;

    ::after {
      height: 2px;
    }

    a, span {
      background-color: ${colors.white};
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.5;
    
    a {
      display: inline-block;
      padding: 0.5em;
    }

    .active {
      font-weight: 700;
    }
  }
`;

export default Section;