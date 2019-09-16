import React from 'react';

import BaseLayout from './base.pt';
import PrimaryColumn from '../components/PrimaryColumn';
import SecondaryColumn from '../components/SecondaryColumn';
import Content from '../components/Content';

class DefaultLayout extends React.PureComponent {
  render() {
    return (
      <BaseLayout
        pathname={this.props.pathname}
        langPt={this.props.pathname}
        langEn={this.props.langEn}
        noRobots={this.props.noRobots}
      >
        <main>
          <Content>
            <PrimaryColumn>
              {this.props.children}
            </PrimaryColumn>
            <SecondaryColumn>
              {this.props.secondaryColumn}
            </SecondaryColumn>
          </Content>
        </main>
      </BaseLayout>
    );
  }
};

export default DefaultLayout;