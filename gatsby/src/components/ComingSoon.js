import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import Jumbotron from './Jumbotron';

class ComingSoon extends PureComponent {
  render() {
    return (
      <Main>
        <Jumbotron
          title={this.props.intl.formatMessage({ id: 'comingSoonTitle' })}
          subtitle={this.props.intl.formatMessage({ id: 'comingSoonSubtitle' })}
          text={this.props.intl.formatMessage({ id: 'comingSoonText' })}
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

export default injectIntl(ComingSoon);