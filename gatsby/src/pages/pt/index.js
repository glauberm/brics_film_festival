import React from 'react';

import HomeLayout from '../../layouts/home.pt';
import FilmsNav from '../../components/I18n/pt/FilmsNav';
import ActivitiesNav from '../../components/I18n/pt/ActivitiesNav';
import ScreeningsNav from '../../components/I18n/pt/ScreeningsNav';
import FestivalNav from '../../components/I18n/pt/FestivalNav';
import NewsArticles from '../../components/I18n/pt/NewsArticles';

class HomePage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <HomeLayout
        pathname={pathname}
        langPt={pathname}
        langEn='/en/'
        secondaryColumn={
          <React.Fragment>
            <FilmsNav />
            <ActivitiesNav />
            <ScreeningsNav />
            <FestivalNav />
          </React.Fragment>
        }
      >
        <NewsArticles />
      </HomeLayout>
    );
  }
}

export default HomePage;