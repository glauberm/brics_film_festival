import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import CallsNav from '../../components/pt/CallsNav';
import CallsArticles from '../../components/pt/CallsArticles';

class CallsPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Chamadas'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/calls/'
        secondaryColumn={
          <CallsNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/pt/chamadas/', text: 'Chamadas'}
        ]} />
        <h1 className='page-title'>Chamadas</h1>
        <CallsArticles />
      </DefaultLayout>
    );
  }
}

export default CallsPage;