import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import ScreeningsNav from '../components/I18n/pt/ScreeningsNav';

class ScreeningsTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpPtScreenings;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={pathname}
          langEn={ data.acf.lang_en
            ? '/en/screenings/' + data.acf.lang_en.post_name + '/'
            : ''
          }
          secondaryColumn={
            <ScreeningsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/pt/mostras/', text: 'Mostras'},
            {href: `/pt/mostras/${data.slug}/`, text: data.title}
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
    wordpressWpPtScreenings(
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

export default ScreeningsTemplate;