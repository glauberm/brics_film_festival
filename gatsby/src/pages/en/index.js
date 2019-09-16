import React, { PureComponent } from 'react';

import HomeLayout from '../../layouts/home.en';
import CallsNav from '../../components/en/CallsNav';
import ActivitiesNav from '../../components/en/ActivitiesNav';
import ScreeningsNav from '../../components/en/ScreeningsNav';
import FestivalNav from '../../components/en/FestivalNav';
import NewsArticles from '../../components/en/NewsArticles';

class HomePage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <HomeLayout
        pathname={pathname}
        langPt='/pt/'
        langEn={pathname}
        secondaryColumn={
          <React.Fragment>
            <CallsNav />
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