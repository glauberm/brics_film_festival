import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Article from '../../Article';
import { ArticleContainer, Button } from '../../../styles/news';

const NewsArticles = (props) => {
  const { allWordpressWpEnNews } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnNews(
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

  const [last, setLast] = useState(2);
  const length = allWordpressWpEnNews.edges.length;

  const handleVisibility = (i) => {
    return (i <= last);
  };

  const increment = () => {
    if (last < length) {
      if ((last + 3) > length) {
        setLast(last + (length - last));
      } else {
        setLast(last + 3);
      }
    }
  };

  return (
    <React.Fragment>
      {allWordpressWpEnNews.edges.map(({ node }, i) => (
        <ArticleContainer
          key={node.id}
          number={i}
          isActive={handleVisibility(i)}
        >
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
            shortable={true}
          />
        </ArticleContainer>
      ))}
      {(last < length) &&
        <Button onClick={increment}>
          {props.intl.formatMessage({ id: 'loadMore' })}
        </Button>
      }
    </React.Fragment>
  );
};


export default injectIntl(NewsArticles);