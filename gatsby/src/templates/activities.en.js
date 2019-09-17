import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import ActivitiesNav from '../components/I18n/en/ActivitiesNav';

class ActivitiesTemplate extends React.PureComponent {
  getForm(slug) {
    switch (slug) {
    case 'courses-on-south-african-chinese-indian-and-russian-and-soviet-film-history':
      return (
        <CourseEnrollmentForm
          location={this.props.location}
          formAction={`${process.env.BASE_WP_REST_API_URL}brics/v1/en_courses_enrollment_form`}
        />
      );
    }
  }

  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpEnActivities;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={ data.acf.lang_pt
            ? '/pt/atividades/' + data.acf.lang_pt.post_name + '/'
            : ''
          }
          langEn={pathname}
          secondaryColumn={
            <ActivitiesNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/activities/', text: 'Activities'},
            {href: `/en/activities/${data.slug}/`, text: data.title}
          ]} />
          <h1 className='title'>
            <span dangerouslySetInnerHTML={{ __html: data.title }} />
            { data.acf.subtitle && 
              <small
                dangerouslySetInnerHTML={{ __html: data.acf.subtitle }}
              />
            }
          </h1>
          <div dangerouslySetInnerHTML={{ __html: data.acf.html }} />
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
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
      }
    }
  }
`;

export default ActivitiesTemplate;