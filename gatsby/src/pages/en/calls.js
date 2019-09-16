import React from 'react';

import DefaultLayout from '../../layouts/default.en';
import Breadcrumb from '../../components/Breadcrumb';
import CallsNav from '../../components/I18n/en/CallsNav';
import CallsArticles from '../../components/I18n/en/CallsArticles';

class CallsPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Calls'
        pathname={pathname}
        langPt='/pt/chamadas/'
        langEn={pathname}
        secondaryColumn={
          <CallsNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/en/calls/', text: 'Calls'}
        ]} />
        <h1 className='page-title'>Calls</h1>
        <CallsArticles />
      </DefaultLayout>
    );
  }
}

export default CallsPage;