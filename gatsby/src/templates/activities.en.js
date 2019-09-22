import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import ActivitiesNav from '../components/I18n/en/ActivitiesNav';
import { getActivityForm } from '../utils';

class ActivitiesTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const activity = this.props.data.wordpressWpEnActivities;
    const aside = this.props.data.allWordpressWpEnActivityAside;

    console.log(aside);

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={activity.title}
          pathname={pathname}
          langPt={ activity.acf.lang_pt
            ? '/pt/atividades/' + activity.acf.lang_pt.post_name + '/'
            : ''
          }
          langEn={pathname}
          secondaryColumn={
            <ActivitiesNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/activities/', text: 'Activities'},
            {href: `/en/activities/${activity.slug}/`, text: activity.title}
          ]} />
          <h1 className='title'>
            <span dangerouslySetInnerHTML={{ __html: activity.title }} />
            { activity.acf.subtitle && 
              <small
                dangerouslySetInnerHTML={{ __html: activity.acf.subtitle }}
              />
            }
          </h1>
          <div dangerouslySetInnerHTML={{ __html: activity.acf.html }} />
          {getActivityForm(activity.acf.form)}
          {
            aside.edges.map(({ node }, i) => (
              <React.Fragment key={i}>
                <h2 className='title'>{node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.acf.informations }} />
              </React.Fragment>
            ))
          }
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!, $wordpressId: Int!) {
    wordpressWpEnActivities(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        subtitle
        html
        lang_pt {
          post_name
        }
        form
      }
    }
    allWordpressWpEnActivityAside(
      filter: {
        acf: {
          activity: {
            wordpress_id: {eq: $wordpressId}
          }
        }
      }
    ) {
      edges {
        node {
          title
          acf {
            informations
          }
        }
      }
    }
  }
`;

export default ActivitiesTemplate;