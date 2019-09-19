import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../styles/theme';

class Decoration extends React.PureComponent {
  render() {
    return (
      <Bar emboss={this.props.emboss ? this.props.emboss : false}>
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </Bar>
    );
  }
}

const Bar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;

  ${props => props.emboss !== false ? css`
    > div {
      box-shadow: 0 1px 0 rgba(255,255,255,0.125) inset;
    }
  `: ''}
`;

const Color = styled.div`
  height: 100%;
  width: 100%;

  :nth-of-type(1) { background-color: ${colors.green}; }
  :nth-of-type(2) { background-color: ${colors.blue}; }
  :nth-of-type(3) { background-color: ${colors.orange}; }
  :nth-of-type(4) { background-color: ${colors.red}; }
  :nth-of-type(5) { background-color: ${colors.yellow}; }
`;

export default Decoration;