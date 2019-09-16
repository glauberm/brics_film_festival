import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.en';
import Breadcrumb from '../../components/Breadcrumb';
import FestivalNav from '../../components/en/FestivalNav';
import FestivalArticles from '../../components/en/FestivalArticles';

class FestivalPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='The Festival'
        pathname={pathname}
        langPt='/pt/o-festival/'
        langEn={pathname}
        secondaryColumn={
          <FestivalNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/en/the-festival/', text: 'The Festival'}
        ]} />
        <h1 className='page-title'>The Festival</h1>
        <FestivalArticles />
      </DefaultLayout>
    );
  }
}

export default FestivalPage;