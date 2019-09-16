import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import FestivalNav from '../components/I18n/en/FestivalNav';

class FestivalTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpEnFestival;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={ data.acf.lang_pt
            ? '/pt/o-festival/' + data.acf.lang_pt.post_name + '/'
            : ''
          }
          langEn={pathname}
          secondaryColumn={
            <FestivalNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/the-festival/', text: 'The Festival'},
            {href: `/en/the-festival/${data.slug}/`, text: data.title}
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
    wordpressWpEnFestival(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        html
        lang_pt {
          post_name
        }
      }
    }
  }
`;

export default FestivalTemplate;