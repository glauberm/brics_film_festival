import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import CallsNav from '../components/I18n/en/CallsNav';

class ScreeningsTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpEnCalls;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={ data.acf.lang_pt
            ? '/pt/chamadas/' + data.acf.lang_pt.post_name + '/'
            : ''
          }
          langEn={pathname}
          secondaryColumn={
            <CallsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/calls/', text: 'Calls'},
            {href: `/en/calls/${data.slug}/`, text: data.title}
          ]} />
          <h1 className='title' dangerouslySetInnerHTML={{ __html: data.title }} />
          <p>Download the file <a href={data.acf.file.url.source_url} target="_blank" rel="noopener noreferrer">{data.title}</a>.</p>
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
    wordpressWpEnCalls(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        lang_pt {
          post_name
        }
        file {
          url {
            source_url
          }
        }
      }
    }
  }
`;

export default ScreeningsTemplate;