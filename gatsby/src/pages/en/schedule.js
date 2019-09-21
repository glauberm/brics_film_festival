import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import DefaultLayout from '../../layouts/default.en';
import Breadcrumb from '../../components/Breadcrumb';
import Events from '../../components/Events';
import ScreeningsNav from '../../components/I18n/en/ScreeningsNav';
import ActivitiesNav from '../../components/I18n/en/ActivitiesNav';

class SchedulePage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.allWordpressWpEnSchedule;

    return (
      <DefaultLayout
        pageTitle='Schedule'
        pathname={pathname}
        langPt='/pt/programacao/'
        langEn={pathname}
        secondaryColumn={
          <React.Fragment>
            <ScreeningsNav />
            <ActivitiesNav />
          </React.Fragment>
        }
      >
        <Breadcrumb crumbs={[
          {href: '/en/schedule/', text: 'Schedule'}
        ]} />
        <Container>
          <h1 className='page-title'>Schedule</h1>
        </Container>
        <Events events={data.group}/>
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
                post_title
                post_name
              }
              obs
            }
          }
        }
      }
    }
  }
`;

export default SchedulePage;