import React from 'react';
import styled from '@emotion/styled';

class SingleColumn extends React.PureComponent {
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
`;

export default SingleColumn;