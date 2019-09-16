import React, { PureComponent } from 'react';

import BaseLayout from './base.pt';
import Content from '../components/Content';
import ComingSoon from '../components/ComingSoon';

class ComingSoonLayout extends PureComponent {
  render() {
    return (
      <BaseLayout
        pathname={this.props.pathname}
        langPt={this.props.pathname}
        langEn={this.props.langEn}
      >
        <Content>
          <ComingSoon />
        </Content>
      </BaseLayout>
    );
  }
};



export default ComingSoonLayout;