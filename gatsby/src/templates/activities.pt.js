import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import ActivitiesNav from '../components/I18n/pt/ActivitiesNav';
import { getActivityForm } from '../utils';
import { Aside } from '../styles/activity';

class ActivitiesTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const activity = this.props.data.wordpressWpPtActivities;
    const aside = this.props.data.allWordpressWpPtActivityAside;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={activity.title}
          pathname={pathname}
          langPt={pathname}
          langEn={ activity.acf.lang_en
            ? '/en/activities/' + activity.acf.lang_en.post_name + '/'
            : ''
          }
          secondaryColumn={
            <ActivitiesNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/pt/atividades/', text: 'Atividades'},
            {href: `/pt/atividades/${activity.slug}/`, text: activity.title}
          ]} />
          <h1 className='title'>
            <span dangerouslySetInnerHTML={{ __html: activity.title }} />
            { activity.acf.subtitle && 
              <React.Fragment>
                <br />
                <small
                  dangerouslySetInnerHTML={{ __html: activity.acf.subtitle }}
                />
              </React.Fragment>
            }
          </h1>
          <div dangerouslySetInnerHTML={{ __html: activity.acf.html }} />
          {getActivityForm(activity.acf.form)}
          {
            aside.edges.map(({ node }, i) => (
              <Aside key={i}>
                <h2 className='title'>{node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.acf.informations }} />
              </Aside>
            ))
          }
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!, $wordpressId: Int!) {
    wordpressWpPtActivities(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        subtitle
        html
        lang_en {
          post_name
        }
        form
      }
    }
    allWordpressWpPtActivityAside(
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