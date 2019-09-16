import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import ScreeningsNav from '../../components/pt/ScreeningsNav';
import ScreeningsArticles from '../../components/pt/ScreeningsArticles';

class ScreeningsPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Mostras'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/screenings/'
        secondaryColumn={
          <ScreeningsNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/pt/mostras/', text: 'Mostras'}
        ]} />
        <h1 className='page-title'>Mostras</h1>
        <ScreeningsArticles />
      </DefaultLayout>
    );
  }
}

export default ScreeningsPage;