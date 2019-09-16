import React, { PureComponent } from 'react';

import BaseLayout from './base.en';
import Content from '../components/Content';
import ComingSoon from '../components/ComingSoon';

class ComingSoonLayout extends PureComponent {
  render() {
    return (
      <BaseLayout
        pathname={this.props.pathname}
        langPt={this.props.langPt}
        langEn={this.props.pathname}
      >
        <Content>
          <ComingSoon />
        </Content>
      </BaseLayout>
    );
  }
};

export default ComingSoonLayout;