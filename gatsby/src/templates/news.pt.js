import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import NewsNav from '../components/I18n/pt/NewsNav';
import News from '../components/News';
import ogImg from '../images/og.pt.png';

class NewsTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpPtNews;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={pathname}
          langEn={ data.acf.lang_en
            ? '/en/news/' + data.acf.lang_en.post_name + '/'
            : ''
          }
          secondaryColumn={
            <NewsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/pt/noticias/', text: 'Notícias'},
            {href: `/pt/noticias/${data.slug}/`, text: data.title}
          ]} />
          <News news={data} image={ogImg} />
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
    wordpressWpPtNews(
      id: {eq: $id}
    ) {
      title
      slug
      date
      modified
      acf {
        html
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default NewsTemplate;