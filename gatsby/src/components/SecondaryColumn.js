import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

import { breakpoints } from '../styles/theme';

class SecondaryColumn extends PureComponent {
  render() {
    return(
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
    padding: 1em;
    margin-top: 2em;
    flex: 1 1 auto;
  }
`;

export default SecondaryColumn;