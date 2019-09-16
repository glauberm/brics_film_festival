import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Article from '../Article';

const NewsArticles = (props) => {
  const { allWordpressWpPtNews } = useStaticQuery(
    graphql`
      query {
        allWordpressWpPtNews(
          sort: {
            fields: [date]
            order: [DESC]
          }
        ) {
          edges {
            node {
              id
              slug
              title
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
        }
      }
    `
  );

  return (
    <React.Fragment>
      {allWordpressWpPtNews.edges.map(({ node }) => (
        <Article
          key={node.id}
          linkTo={
            props.intl.formatMessage({ id: 'navigationNewsHref' })
            + node.slug + '/'
          }
          title={node.title}
          imgFluid={node.acf.image &&
            node.acf.image.localFile.childImageSharp.fluid
          }
          content={node.acf.html}
        />
      ))}
    </React.Fragment>
  );
};


export default injectIntl(NewsArticles);