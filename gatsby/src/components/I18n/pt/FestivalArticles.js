import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Article from '../../Article';

const FestivalArticles = (props) => {
  const { allWordpressWpPtFestival } = useStaticQuery(
    graphql`
      query {
        allWordpressWpPtFestival(
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
      {allWordpressWpPtFestival.edges.map(({ node }, i) => (
        <Article
          key={i}
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