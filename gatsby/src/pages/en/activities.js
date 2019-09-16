import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.en';
import Breadcrumb from '../../components/Breadcrumb';
import ActivitiesNav from '../../components/en/ActivitiesNav';
import ActivitiesArticles from '../../components/en/ActivitiesArticles';

class ActivitiesPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Activities'
        pathname={pathname}
        langPt='/pt/atividades/'
        langEn={pathname}
        secondaryColumn={
          <ActivitiesNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/en/activities/', text: 'Activities'}
        ]} />
        <h1 className='page-title'>Activities</h1>
        <ActivitiesArticles />
      </DefaultLayout>
    );
  }
}

export default ActivitiesPage;