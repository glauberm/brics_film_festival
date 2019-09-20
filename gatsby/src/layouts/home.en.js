import React from 'react';

import BaseLayout from './base.en';
import PrimaryColumn from '../components/PrimaryColumn';
import SecondaryColumn from '../components/SecondaryColumn';
import Content from '../components/Content';

class HomeLayout extends React.Component {
  render() {
    return (
      <BaseLayout
        pathname={this.props.pathname}
        langPt={this.props.langPt}
        langEn={this.props.pathname}
      >
        <Content>
          <PrimaryColumn>
            <main>
              {this.props.children}
            </main>
          </PrimaryColumn>
          <SecondaryColumn>
            <aside aria-label="Sidebar">
              {this.props.secondaryColumn}
            </aside>
          </SecondaryColumn>
        </Content>
      </BaseLayout>
    );
  }
};

export default HomeLayout;