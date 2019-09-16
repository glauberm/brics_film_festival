import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Article from '../Article';

const FestivalArticles = (props) => {
  const { allWordpressWpEnFestival } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnFestival(
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
                html
              }
            }
          }
        }
      }
    `
  );

  return (
    <React.Fragment>
      {allWordpressWpEnFestival.edges.map(({ node }) => (
        <Article
          key={node.id}
          linkTo={
            props.intl.formatMessage({ id: 'navigationFestivalHref' })
            + node.slug + '/'
          }
          title={node.title}
          content={node.acf.html}
        />
      ))}
    </React.Fragment>
  );
};


export default injectIntl(FestivalArticles);