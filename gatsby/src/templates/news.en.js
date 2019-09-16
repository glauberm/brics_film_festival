import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import NewsNav from '../components/en/NewsNav';

class NewsTemplate extends PureComponent {
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
    wordpressWpEnNews(
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