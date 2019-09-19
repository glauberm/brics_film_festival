import React from 'react';

import BaseLayout from './base.pt';
import PrimaryColumn from '../components/PrimaryColumn';
import SecondaryColumn from '../components/SecondaryColumn';
import Content from '../components/Content';

class HomeLayout extends React.PureComponent {
  render() {
    return (
      <BaseLayout
        pathname={this.props.pathname}
        langPt={this.props.pathname}
        langEn={this.props.langEn}
      >
        <Content>
          <PrimaryColumn>
            <main>
              {this.props.children}
            </main>
          </PrimaryColumn>
          <SecondaryColumn>
            <aside aria-label="Barra Lateral">
              {this.props.secondaryColumn}
            </aside>
          </SecondaryColumn>
        </Content>
      </BaseLayout>
    );
  }
};

export default HomeLayout;