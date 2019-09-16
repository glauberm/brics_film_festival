import React from 'react';
import styled from '@emotion/styled';

import { breakpoints } from '../styles/theme';

class PrimaryColumn extends React.PureComponent {
  render() {
    return (
      <Column>
        {this.props.children}
      </Column>
    );
  }
}

const Column = styled.div`
  width: 100%;
  padding: 1em 0;

  @media (min-width: ${breakpoints.sm}px) {
    width: 66.6666666667%;
    padding: 1em;
    flex: 2 0 auto;
  }
`;

export default PrimaryColumn;