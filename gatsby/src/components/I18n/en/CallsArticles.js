import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Article from '../../Article';

const CallsArticles = (props) => {
  const { allWordpressWpEnCalls } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnCalls(
          sort: {
            fields: [menu_order]
            order: [ASC]
          }
        ) {
          edges {
            node {
              id
              slug
              title
              acf {
                file {
                  url {
                    source_url
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
      {allWordpressWpEnCalls.edges.map(({ node }, i) => (
        <Article
          key={i}
          linkTo={
            props.intl.formatMessage({ id: 'navigationCallsHref' })
            + node.slug + '/'
          }
          title={node.title}
          content={`
            <p>Download the file <a href=${node.acf.file.url.source_url} target="_blank" rel="noopener noreferrer">${node.title}</a>.</p>
          `}
        />
      ))}
    </React.Fragment>
  );
};


export default injectIntl(CallsArticles);