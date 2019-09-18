import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import Article from '../../Article';

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

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(2);
  const newsLength = allWordpressWpPtNews.edges.length;

  const handleFakePagination = (key) => {
    return (key >= min && key <= max);
  };

  const increment = () => {
    if (max < newsLength) {
      setMin(min + 3);

      if ((max + 3) > newsLength) {
        setMax(max + (newsLength - max));
      } else {
        setMax(max + 3);
      }
    }

    console.log(max, min);
  };

  const decrement = () => {
    if (min > 0) {
      setMax(max - 3);

      if ((min - 3) < 0) {
        setMin(min - (newsLength - min));
      } else {
        setMin(min - 3);
      }
    }

    console.log(max, min);
  };

  return (
    <React.Fragment>
      {allWordpressWpPtNews.edges.map(({ node }, key) => (
        <ArticleContainer
          key={node.id}
          isActive={handleFakePagination(key)}
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
      {(min > 0) &&
        <a href='#banner' onClick={decrement}>Decrement</a>
      }
      {(max < newsLength) &&
        <a href='#banner' onClick={increment}>Increment</a>
      }
    </React.Fragment>
  );
};

const ArticleContainer = styled.div`
  ${props => props.isActive ? '' : css`
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `}
`;

export default injectIntl(NewsArticles);