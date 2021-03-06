import React from 'react';

import ComingSoonLayout from '../../layouts/coming-soon.en';

class VenuesPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <ComingSoonLayout
        pageTitle='Venues'
        pathname={pathname}
        langPt='/pt/locais/'
        langEn={pathname}
      />
    );
  }
}

export default VenuesPage;