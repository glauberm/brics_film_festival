import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import CallsNav from '../components/pt/CallsNav';

class CallsTemplate extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpPtCalls;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={pathname}
          langEn={ data.acf.lang_en
            ? '/en/calls/' + data.acf.lang_en.post_name + '/'
            : ''
          }
          secondaryColumn={
            <CallsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/pt/chamadas/', text: 'Chamadas'},
            {href: `/pt/chamadas/${data.slug}/`, text: data.title}
          ]} />
          <h1 className='title' dangerouslySetInnerHTML={{ __html: data.title }} />
          <p>Baixe o arquivo <a href={data.acf.file.url.source_url} target="_blank" rel="noopener noreferrer">{data.title}</a>.</p>
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
    wordpressWpPtCalls(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        lang_en {
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

export default CallsTemplate;