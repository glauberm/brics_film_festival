import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import NewsNav from '../components/I18n/en/NewsNav';
import News from '../components/News';
import ogImg from '../images/og.en.png';

class NewsTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpEnNews;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt={ data.acf.lang_pt
            ? '/pt/noticias/' + data.acf.lang_pt.post_name + '/'
            : ''
          }
          langEn={pathname}
          secondaryColumn={
            <NewsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/news/', text: 'News'},
            {href: `/en/news/${data.slug}/`, text: data.title}
          ]} />
          <News news={data} image={ogImg} />
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
    wordpressWpEnNews(
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