import React from 'react';

import DefaultLayout from '../../layouts/default.en';
import Breadcrumb from '../../components/Breadcrumb';
import NewsNav from '../../components/I18n/en/NewsNav';
import NewsArticles from '../../components/I18n/en/NewsArticles';

class NewsPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='News'
        pathname={pathname}
        langPt='/pt/noticias/'
        langEn={pathname}
        secondaryColumn={
          <NewsNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/en/news/', text: 'News'}
        ]} />
        <h1 className='page-title'>News</h1>
        <NewsArticles />
      </DefaultLayout>
    );
  }
}

export default NewsPage;