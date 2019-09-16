import React from 'react';

import BaseLayout from './base.en';
import PrimaryColumn from '../components/PrimaryColumn';
import SecondaryColumn from '../components/SecondaryColumn';
import Content from '../components/Content';

class DefaultLayout extends React.PureComponent {
  render() {
    return (
      <BaseLayout
        pathname={this.props.pathname}
        langPt={this.props.langPt}
        langEn={this.props.pathname}
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