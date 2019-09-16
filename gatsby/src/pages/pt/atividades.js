import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import ActivitiesNav from '../../components/pt/ActivitiesNav';
import ActivitiesArticles from '../../components/pt/ActivitiesArticles';

class ActivitiesPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Atividades'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/activities/'
        secondaryColumn={
          <ActivitiesNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/pt/atividades/', text: 'Atividades'}
        ]} />
        <h1 className='page-title'>Atividades</h1>
        <ActivitiesArticles />
      </DefaultLayout>
    );
  }
}

export default ActivitiesPage;