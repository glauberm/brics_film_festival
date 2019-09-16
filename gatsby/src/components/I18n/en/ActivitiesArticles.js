import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Article from '../../Article';

const ActivitiesArticles = (props) => {
  const { allWordpressWpEnActivities } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnActivities(
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
      {allWordpressWpEnActivities.edges.map(({ node }) => (
        <Article
          key={node.id}
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