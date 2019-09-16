import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import NewsNav from '../../components/pt/NewsNav';
import NewsArticles from '../../components/pt/NewsArticles';

class NewsPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Notícias'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/news/'
        secondaryColumn={
          <NewsNav />
        }
      >
        <Breadcrumb crumbs={[
          {href: '/pt/noticias/', text: 'Notícias'}
        ]} />
        <h1 className='page-title'>Notícias</h1>
        <NewsArticles />
      </DefaultLayout>
    );
  }
}

export default NewsPage;