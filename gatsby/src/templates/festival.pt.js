import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import FestivalNav from '../components/I18n/pt/FestivalNav';

class FestivalTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpPtFestival;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={pathname}
          langEn={ data.acf.lang_en
            ? '/en/the-festival/' + data.acf.lang_en.post_name + '/'
            : ''
          }
          secondaryColumn={
            <FestivalNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/pt/o-festival/', text: 'O Festival'},
            {href: `/pt/o-festival/${data.slug}/`, text: data.title}
          ]} />
          <h1 className='title' dangerouslySetInnerHTML={{ __html: data.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.acf.html }} />
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
    wordpressWpPtFestival(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        html
        lang_en {
          post_name
        }
      }
    }
  }
`;

export default FestivalTemplate;