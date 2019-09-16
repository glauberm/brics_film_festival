import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import ScreeningsNav from '../components/en/ScreeningsNav';

class ScreeningsTemplate extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpEnScreenings;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={ data.acf.lang_pt
            ? '/pt/mostras/' + data.acf.lang_pt.post_name + '/'
            : ''
          }
          langEn={pathname}
          secondaryColumn={
            <ScreeningsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/screenings/', text: 'Screenings'},
            {href: `/en/screenings/${data.slug}/`, text: data.title}
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
    wordpressWpEnScreenings(
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

export default ScreeningsTemplate;