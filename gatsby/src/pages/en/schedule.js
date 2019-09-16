import React from 'react';

import ComingSoonLayout from '../../layouts/coming-soon.en';

class SchedulePage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <ComingSoonLayout
        pageTitle='Schedule'
        pathname={pathname}
        langPt='/pt/programacao/'
        langEn={pathname}
      />
    );
  }
}

export default SchedulePage;