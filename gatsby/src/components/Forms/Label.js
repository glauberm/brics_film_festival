import React from 'react';
import { injectIntl } from 'react-intl';
import styled from '@emotion/styled';

class Label extends React.PureComponent {
  render() {
    return (
      <span>
        {this.props.intl.formatMessage({ id: this.props.label })}
        {this.props.notRequired &&
          <Small>
            {this.props.intl.formatMessage({ id: 'notRequired' })}
          </Small>
        }
      </span>
    );
  }
}

const Small = styled.small`
  margin-left: .5em;
  text-transform: lowercase;

  ::before {
    content: '(';
  }

  ::after {
    content: ')';
  }
`;

export default injectIntl(Label);