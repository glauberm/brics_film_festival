import React from 'react';
import { graphql } from 'gatsby';

import HomeLayout from '../../layouts/home.en';
import FilmsNav from '../../components/I18n/en/FilmsNav';
import ActivitiesNav from '../../components/I18n/en/ActivitiesNav';
import ScreeningsNav from '../../components/I18n/en/ScreeningsNav';
import FestivalNav from '../../components/I18n/en/FestivalNav';
import TodaySchedule from '../../components/TodaySchedule';
import NewsArticles from '../../components/I18n/en/NewsArticles';

class HomePage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const schedule = this.props.data.allWordpressWpEnSchedule;
    const films = this.props.data.allWordpressWpEnFilms;

    return (
      <HomeLayout
        pathname={pathname}
        langEn='/en/'
        langEn={pathname}
        secondaryColumn={
          <React.Fragment>
            <FilmsNav />
            <ActivitiesNav />
            <ScreeningsNav />
            <FestivalNav />
          </React.Fragment>
        }
      >
        <TodaySchedule
          schedule={schedule.group}
          films={films}
        />
        <NewsArticles />
      </HomeLayout>
    );
  }
}

export const query = graphql`
  query {
    allWordpressWpEnSchedule(
      sort: {
        fields: [acf___days, acf___time, menu_order]
        order: [ASC]
      }
    ) {
      group(field: acf___days) {
        edges {
          node {
            id
            slug
            title
            acf {
              days
              time
              subtitle
              duration
              parental_rating
              venue {
                post_title
              }
              screening {
                post_name
              }
              activity {
                post_name
              }
              films {
                wordpress_id
              }
              obs
            }
          }
        }
      }
    }
    allWordpressWpEnFilms {
      edges {
        node {
          wordpress_id
          title
          slug
          acf {
            image {
              localFile {
                childImageSharp {
                  resize(width: 400, height: 200, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
            screening {
              post_name
            }
          }
        }
      }
    }
  }
`;

export default HomePage;