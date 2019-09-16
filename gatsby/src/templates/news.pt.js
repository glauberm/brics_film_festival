import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import NewsNav from '../components/pt/NewsNav';

class NewsTemplate extends PureComponent {
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
          <h1 className='title' dangerouslySetInnerHTML={{ __html: data.title }} />
          { data.acf.image &&
            <Img fluid={data.acf.image.localFile.childImageSharp.fluid}/>
          }
          <div dangerouslySetInnerHTML={{ __html: data.acf.html }} />
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