import React from 'react';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import ScreeningsNav from '../../components/I18n/pt/ScreeningsNav';
import ScreeningsArticles from '../../components/I18n/pt/ScreeningsArticles';

class ScreeningsPage extends React.PureComponent {
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