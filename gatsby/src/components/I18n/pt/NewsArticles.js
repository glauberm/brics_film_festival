import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import Article from '../../Article';
import { ArticleContainer, Button } from '../../../styles/news';

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

  const [last, setLast] = useState(2);
  const length = allWordpressWpPtNews.edges.length;

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
    <Container>
      {allWordpressWpPtNews.edges.map(({ node }, i) => (
        <ArticleContainer
          key={node.id}
          number={i}
          isActive={handleVisibility(i)}
        >
          <Article
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
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 3em;
`;

export default injectIntl(NewsArticles);