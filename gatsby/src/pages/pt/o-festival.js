import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import FestivalNav from '../../components/pt/FestivalNav';
import FestivalArticles from '../../components/pt/FestivalArticles';

class FestivalPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='O Festival'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/the-festival/'
        secondaryColumn={
          <FestivalNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/pt/o-festival/', text: 'O Festival'}
        ]} />
        <h1 className='page-title'>O Festival</h1>
        <FestivalArticles />
      </DefaultLayout>
    );
  }
}

export default FestivalPage;