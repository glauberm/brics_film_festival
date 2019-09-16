import React from 'react';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import Jumbotron from './Jumbotron';

class NotFound extends React.PureComponent {
  render() {
    return (
      <Main>
        <Jumbotron
          title={this.props.intl.formatMessage({ id: 'notFoundTitle' })}
          subtitle={this.props.intl.formatMessage({ id: 'notFoundSubtitle' })}
          text={this.props.intl.formatMessage({ id: 'notFoundText' })}
          linkTo={this.props.intl.formatMessage({ id: 'navigationHomeHref' })}
          linkText={this.props.intl.formatMessage({ id: 'notFoundTextLink' })}
        />
      </Main>
    );
  }
}

const Main = styled.main`
  width: 100%;
`;

export default injectIntl(NotFound);