import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Article from '../../Article';

const ActivitiesArticles = (props) => {
  const { allWordpressWpPtActivities } = useStaticQuery(
    graphql`
      query {
        allWordpressWpPtActivities(
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
                subtitle
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
      {allWordpressWpPtActivities.edges.map(({ node }, i) => (
        <Article
          key={i}
          linkTo={
            props.intl.formatMessage({ id: 'navigationActivitiesHref' })
            + node.slug + '/'
          }
          title={node.title}
          subtitle={node.acf.subtitle}
          content={node.acf.html}
        />
      ))}
    </React.Fragment>
  );
};


export default injectIntl(ActivitiesArticles);