import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import ActivitiesNav from '../components/I18n/pt/ActivitiesNav';
import CoursesEnrollmentForm from '../components/CoursesEnrollmentForm';

class ActivitiesTemplate extends React.PureComponent {
  getForm(slug) {
    switch (slug) {
    case 'cursos-de-historia-do-cinema-indiano-chines-sul-africano-russo-e-sovietico':
      return (
        <CoursesEnrollmentForm
          location={this.props.location}
          formAction={`${process.env.BASE_WP_REST_API_URL}brics/v1/pt_courses_enrollment_form`}
        />
      );
    case 'courses-on-south-african-chinese-indian-and-russian-and-soviet-film-history':
      return (
        <CoursesEnrollmentForm
          location={this.props.location}
          formAction={`${process.env.BASE_WP_REST_API_URL}brics/v1/en_courses_enrollment_form`}
        />
      );
    }
  }
  
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpPtActivities;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={pathname}
          langEn={ data.acf.lang_en
            ? '/en/activities/' + data.acf.lang_en.post_name + '/'
            : ''
          }
          secondaryColumn={
            <ActivitiesNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/pt/atividades/', text: 'Atividades'},
            {href: `/pt/atividades/${data.slug}/`, text: data.title}
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
          {this.getForm(this.props.pageContext.slug)}
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
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
      }
    }
  }
`;

export default ActivitiesTemplate;