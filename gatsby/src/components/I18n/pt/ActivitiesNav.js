import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Section from '../../Section';

const ActivitiesNav = (props) => {
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
            }
          }
        }
      }
    `
  );

  return (
    <Section
      linkTo={props.intl.formatMessage({ id: 'navigationActivitiesHref' })}
      title={props.intl.formatMessage({ id: 'navigationActivitiesText' })}
    >
      <nav aria-label={props.intl.formatMessage({ id: 'navigationActivitiesText' })}>
        <ul>
          {allWordpressWpPtActivities.edges.map(({ node }, i) => (
            <li key={i}>
              <Link
                to={
                  props.intl.formatMessage({ id: 'navigationActivitiesHref' })
                  + node.slug + '/'
                }
                activeClassName='active'
                dangerouslySetInnerHTML={{ __html: node.title }} 
              />
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
};

export default injectIntl(ActivitiesNav);