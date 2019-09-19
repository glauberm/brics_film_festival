import React from 'react';
import styled from '@emotion/styled';

import { colors, breakpoints, containerSize, linkBaseStyle } from '../styles/theme';

class Content extends React.PureComponent {
  render() {
    return (
      <Inner>
        {this.props.children}
      </Inner>
    );
  }
}

const Inner = styled.div`
  max-width: ${containerSize};
  margin: 0 auto;
  padding: 1em 1em 2em;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.md}px) {
    flex-wrap: nowrap;
  }

  a {
    ${linkBaseStyle}
  }

  section,
  article {
    margin-bottom: 3em;
  }

  .title {
    position: relative;
    padding-bottom: 0.75em;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 25%;
      background: linear-gradient(
        to right,
        ${colors.green} 0%,
        ${colors.green} 20%,
        ${colors.blue} 20%,
        ${colors.blue} 40%,
        ${colors.orange} 40%,
        ${colors.orange} 60%,
        ${colors.red} 60%,
        ${colors.red} 80%,
        ${colors.yellow} 80%,
        ${colors.yellow} 100%
      );
      height: 4px;

      @media (min-width: ${breakpoints.sm}px) {
        width: 15%;
      }
    }

    a {
      ${linkBaseStyle}
      color: ${colors.black};

      :hover,
      :focus {
        text-decoration-color: ${colors.green};
      }
    }

    small {
      display: block;
      color: ${colors.grayDark};
      margin-top: 0.25em;
    }
  }

  h1.title {
    margin-bottom: 1em;
  }

  .page-title {
    color: ${colors.blackLight};
  }

  h1.page-title {
    padding-bottom: 1em;
  }
`;

export default Content;