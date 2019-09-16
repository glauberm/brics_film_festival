import React from 'react';

import BaseLayout from './base.pt';
import Content from '../components/Content';
import SingleColumn from '../components/SingleColumn';

class ScheduleLayout extends React.PureComponent {
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
            <SingleColumn>
              {this.props.children}
            </SingleColumn>
          </Content>
        </main>
      </BaseLayout>
    );
  }
};

export default ScheduleLayout;