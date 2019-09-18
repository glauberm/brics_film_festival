import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../../layouts/default.pt';
import Breadcrumb from '../../components/Breadcrumb';
import Events from '../../components/Events';
import ScreeningsNav from '../../components/I18n/pt/ScreeningsNav';
import ActivitiesNav from '../../components/I18n/pt/ActivitiesNav';

class SchedulePage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.allWordpressWpPtSchedule;

    return (
      <DefaultLayout
        pageTitle='Programação'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/schedule/'
        secondaryColumn={
          <React.Fragment>
            <ScreeningsNav />
            <ActivitiesNav />
          </React.Fragment>
        }
      >
        <Breadcrumb crumbs={[
          {href: '/pt/programacao/', text: 'Programação'}
        ]} />
        <h1 className='page-title'>Programação</h1>
        <Events events={data.group}/>
      </DefaultLayout>
    );
  }
}

export const query = graphql`
  query {
    allWordpressWpPtSchedule(
      sort: {
        fields: [acf___days, acf___time]
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
              # parental_rating
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