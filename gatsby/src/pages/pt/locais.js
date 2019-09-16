import React from 'react';

import ComingSoonLayout from '../../layouts/coming-soon.pt';

class VenuesPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <ComingSoonLayout
        pageTitle='Locais'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/venues/'
      />
    );
  }
}

export default VenuesPage;