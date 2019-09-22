import React from 'react';

import HomeLayout from '../../layouts/home.en';
import ActivitiesNav from '../../components/I18n/en/ActivitiesNav';
import ScreeningsNav from '../../components/I18n/en/ScreeningsNav';
import FestivalNav from '../../components/I18n/en/FestivalNav';
import NewsArticles from '../../components/I18n/en/NewsArticles';

class HomePage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <HomeLayout
        pathname={pathname}
        langPt='/pt/'
        langEn={pathname}
        secondaryColumn={
          <React.Fragment>
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