import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import Schedule from '../../components/Schedule';
import ActivitiesNav from '../../components/I18n/pt/ActivitiesNav';
import ScreeningsNav from '../../components/I18n/pt/ScreeningsNav';
import FilmsNav from '../../components/I18n/pt/FilmsNav';

class SchedulePage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const schedule = this.props.data.allWordpressWpPtSchedule;
    const films = this.props.data.allWordpressWpPtFilms;

    return (
      <DefaultLayout
        pageTitle='Programação'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/schedule/'
        secondaryColumn={
          <React.Fragment>
            <ActivitiesNav />
            <ScreeningsNav />
            <FilmsNav />
          </React.Fragment>
        }
      >
        <Breadcrumb crumbs={[
          {href: '/pt/programacao/', text: 'Programação'}
        ]} />
        <Container>
          <h1 className='page-title'>Programação</h1>
        </Container>
        <Schedule
          schedule={schedule.group}
          films={films}
        />
      </DefaultLayout>
    );
  }
}

const Container = styled.div`
  h1.page-title {
    padding-bottom: 0;
  }
`;

export const query = graphql`
  query {
    allWordpressWpPtSchedule(
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
    allWordpressWpPtFilms {
      edges {
        node {
          wordpress_id
          title
          slug
          acf {
            country
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

export default SchedulePage;