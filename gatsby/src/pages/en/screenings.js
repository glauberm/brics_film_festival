import React from 'react';

import DefaultLayout from '../../layouts/default.en';
import Breadcrumb from '../../components/Breadcrumb';
import ScreeningsNav from '../../components/I18n/en/ScreeningsNav';
import ScreeningsArticles from '../../components/I18n/en/ScreeningsArticles';

class ScreeningsPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Screenings'
        pathname={pathname}
        langPt='/pt/mostras/'
        langEn={pathname}
        secondaryColumn={
          <ScreeningsNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/en/screenings/', text: 'Screenings'}
        ]} />
        <h1 className='page-title'>Screenings</h1>
        <ScreeningsArticles />
      </DefaultLayout>
    );
  }
}

export default ScreeningsPage;